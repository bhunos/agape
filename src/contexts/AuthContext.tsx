import { createContext, useEffect, useState } from "react";
import Router from "next/router";
import { setCookie, parseCookies } from "nookies";

type SignInData = {
  email: string;
  password: string;
};

type AuthContextType = {
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
    const res = await fetch("http://api.agapeoc.com.br/login", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    console.log(res);
    const api = await res.json();
    setToken(api.token);

    setCookie(null, "token", api.token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    Router.push("/user");
  }

  return (
    <AuthContext.Provider value={{ token, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
