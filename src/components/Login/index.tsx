import React, { useContext, useState } from "react";
import { Section } from "./styles";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext";
import { BASE_URL } from "../../config";
import { mask } from "../Mask/index";
import Email from "next-auth/providers/email";

interface forgotProps {
  forgotEmail: string;
  forgotDocument: string
}

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);
  const [valor, setValor] = useState("");

  async function handleSign(data: any) {
    try {
      await signIn(data);
    } catch ({ message }) {
      alert(message);
    }
  }

  const [dropdown, setDropdown] = useState("");

  const showDropdown = () => {
    const openModal = document.querySelector(".forgot-password");
    if (dropdown === "") {
      openModal?.classList.add("active");
    }
  };

  const closeDropdown = () => {
    const closeModal = document.querySelector(".close");
    const openModal = document.querySelector(".forgot-password");

    closeModal?.addEventListener("click", () => {
      openModal?.classList.remove("active");
    });
  };

  async function forgotPassword({ forgotEmail, forgotDocument }: forgotProps) {
    let document = forgotDocument.replace(/[^\d]+/g, '')

    try {
      const response = await fetch(`${BASE_URL}/forgot-password`, {
        method: "POST",
        body: JSON.stringify({
          email: forgotEmail,
          document: document
        })
      })

      alert(`Sua nova senha foi enviada para o e-mail ${forgotEmail}`)
      window.location.href = '/entrar';

    } catch (error) {
      console.error(error)
    }
    console.log('email', forgotDocument)
  }

  function handleChangeMask(event: any) {
    const { value } = event.target;

    setValor(mask(value));
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
          <a onClick={showDropdown}>Esqueceu a senha?</a>

          <Link href="https://api.whatsapp.com/send?phone=5544984449862&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site.">
            <a>Solicitar uma Criar Conta</a>
          </Link>
        </div>
      </div>

      <div className="forgot-password">
        <div className="forgot-password--container">
          <header className="header">
            <h1>Esqueceu a senha?</h1>
            <div onClick={closeDropdown} className="close">
              <div></div>
              <div></div>
            </div>
          </header>

          <form action="" method="POST" onSubmit={handleSubmit(forgotPassword)}>
            <label htmlFor="forgotForm">
              <input
                {...register("forgotEmail")}
                name="forgotEmail"
                type="email"
                id="forgotEmail"
                required
                placeholder="Email"
              />
            </label>
            <label htmlFor="forgotDocument">
              <input
                {...register("forgotDocument")}
                name="forgotDocument"
                type="text"
                maxLength={18}
                onChange={handleChangeMask}
                value={valor}
                id="forgotDocument"
                required
                placeholder="CPF ou CNPJ"
              />
              <input type="submit" id="forgotButton" value="Enviar" />
            </label>
          </form>
        </div>
      </div>
    </Section>
  );
};
