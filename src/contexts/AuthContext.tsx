import { createContext, useEffect, useState } from "react";
import Router from "next/router";
import axios from "axios";
import { response } from "express";

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

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | any>(null);
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
      console.log(user);

      console.log("entrou");
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
