import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'

import { recoverUserInformation, signInRequest } from "../services/auth";

type SignInData = {
email: string;
password: string;
}

type User = {
  name: string;
  email: string;
  avatar_url: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (dara: SignInData) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {

  const [user, setUser] = useState<User | any>(null)

  const isAuthenticated = !!user;

  useEffect(()=> {
    const { 'agape-token': token  } = parseCookies()

    if (token) {
      recoverUserInformation().then(respose => setUser(respose.user))
    }

  }, [])

  async function signIn({email, password,}: SignInData) {
    const { token, user } = await signInRequest({
      email,
      password,
    })

    setCookie(undefined, 'agape-token', token, {
      maxAge: 60 * 60 * 1  // 1 hour
    } )

    setUser(user)

    Router.push('/user')
  }
  
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn}}>
      {children}
    </AuthContext.Provider>
  )
}