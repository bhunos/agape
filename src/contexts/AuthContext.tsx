import { createContext, useEffect, useState } from "react";
import Router from "next/router";
import { setCookie, parseCookies } from "nookies";

type SignInData = {
  email: string;
  password: string;
};

type User = {
  name: string;
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { token } = parseCookies();
  }, []);

  async function signIn({ email, password }: SignInData) {
    try {
      const { token, user }: any = async function getStaticProps() {
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
        const data = await res.json();
        return { props: { data } };
      };

      setCookie(undefined, "token", token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });

      setUser(user);
    } catch (err) {
      console.log("error");
    }

    Router.push("/user");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
