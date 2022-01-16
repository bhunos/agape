import React from "react";
import Image from "next/image"
import close from "../../../public/image/close.svg"
import { IsModalVisible } from "../SinginButton";
import { Section } from "./styles";
import Link from "next/link";

export const ModalLogin = ({ isModalVisible, onClickLink }: IsModalVisible) => {
  return (
    <Section>
      <div className="content">
        <div className="close" onClick={onClickLink}>
          <Image src={close} alt="Fechar" />
        </div>
        <h1>Login Agape Docs</h1>
        <p>Entre para ter acesso a os documentos</p>
        <form action="" method="POST">
          <label htmlFor="loginForm">
            <input type="text" id="singinName" placeholder="Nome de Usuario" />
            <input type="password" id="singinPassword" placeholder="Senha" />
            <input type="button" id="singinButton" value="Entrar" />
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