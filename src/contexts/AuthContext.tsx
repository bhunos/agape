import { createContext, useEffect, useState } from "react";
import Router from "next/router";
import { parseCookies, setCookie } from "nookies";
import { BASE_URL } from "../config";

type SignInData = {
  email: string;
  password: string;
};

export type AuthContextType = {
  token: string | null;
  signIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const cookie = parseCookies();

    if (cookie.token) {
      setToken(cookie.token);
    }
  }, []);

  async function signIn({ email, password }: SignInData) {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const api = await res.json();

    if (api.error) {
      throw new Error(api.message);
    }

    setToken(api.token);

    setCookie(null, "token", api.token, {
      maxAge: 60 * 60, // 1 hour
    });

    const response = await fetch(`${BASE_URL}/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': api.token,
      },
    })
    const data = await response.json()

    if(data.is_admin === "NAO") {
      await Router.push(`/user`)
    } else {
      await Router.push("/admin");
    }
  }

const logout = () => {
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ token, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
