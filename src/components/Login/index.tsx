import React, { useContext } from "react";
import { Section } from "./styles";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  async function handleSign(data) {
    try {
      await signIn(data);
    } catch (err) {
      console.log("erro bravo");
    }
  }

  return (
    <Section>
      <div className="content">
        <h1>Login Agape Docs</h1>
        <p>Entre para ter acesso a os documentos</p>
        <form action="" method="POST" onSubmit={handleSubmit(handleSign)}>
          <label htmlFor="loginForm">
            <input
              {...register("email")}
              name="email"
              type="email"
              id="singinEmail"
              autoComplete="email"
              required
              placeholder="Email"
            />
            <input
              {...register("password")}
              name="password"
              type="password"
              id="singinPassword"
              autoComplete="current-password"
              required
              placeholder="Senha"
            />
            <input type="submit" id="singinButton" value="Entrar" />
          </label>
        </form>
        <div className="links">
          <Link href="">
            <a>Esqueceu a senha?</a>
          </Link>
          <Link href="createUser">
            <a>Criar Conta</a>
          </Link>
        </div>
      </div>
    </Section>
  );
};
