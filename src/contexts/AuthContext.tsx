import { createContext, useEffect, useState } from "react";
import Router from "next/router";

type AuthContextType = {
  isAuthenticated: boolean;
  user: { user: any; signIn: () => Promise<{ err: unknown } | undefined> };
  signIn: any;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<any | any>(null);

  async function signIn() {
    try {
      const user = await fetch(`https://api.agapeoc.com.br`, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }).then((response) => {
        console.log(response);
      });
    } catch (err) {
      return { err };
    }

    setUser(user);

    Router.push("/user");
  }

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
