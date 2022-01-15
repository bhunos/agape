import React from "react";
import { IsModalVisible } from "../SinginButton";
import { Section } from "./styles";

export const ModalLogin = ({ isModalVisible, onClickLink }: IsModalVisible) => {
  return (
    <Section>
      <div className="content">
        <div className="close" onClick={onClickLink}>
          <img src="./image/close.svg" alt="Fechar" />
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
          <a href="">Esqueceu a senha?</a>
          <a href="">Solicite um cadastro</a>
        </div>
      </div>
    </Section>
  )
}