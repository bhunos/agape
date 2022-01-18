import React, { useContext } from "react";
import Image from "next/image"
import close from "../../../public/image/close.svg"
import { IsModalVisible } from "../SinginButton";
import { Section } from "./styles";
import Link from "next/link";

import { useForm } from "react-hook-form"
import { AuthContext } from "../../contexts/AuthContext";

export const ModalLogin = ({ isModalVisible, onClickLink }: IsModalVisible) => {
  
  const { register, handleSubmit } = useForm();
  const { signIn} = useContext(AuthContext)

  async function handleSign(data: any) {
    await signIn(data)
  }

  return (
    <Section>
      <div className="content">
        <div className="close" onClick={onClickLink}>
          <Image src={close} alt="Fechar" />
        </div>
        <h1>Login Agape Docs</h1>
        <p>Entre para ter acesso a os documentos</p>
        <form action="" method="POST" onSubmit={handleSubmit(handleSign)}>
          <label htmlFor="loginForm">
            <input
            {...register('email')}
            name="email"
            type="email"
            id="singinEmail"
            autoComplete="email"
            required
            placeholder="Email" />
            <input
            {...register('password')}
             name="password"
             type="password" 
             id="singinPassword"
             autoComplete="current-password"
             required 
             placeholder="Senha" />
            <input type="submit" id="singinButton" value="Entrar" />
          </label>
        </form>
        <div className="links">
          <Link href="">
            <a>Esqueceu a senha?</a>
          </Link>
          <Link href="">
            <a>Solicite um cadastro</a>
          </Link>
        </div>
      </div>
    </Section>
  )
}