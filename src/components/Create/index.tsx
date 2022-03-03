import { CreateStyled } from "./styles";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../config";
import Router from "next/router";
import { parseCookies, setCookie } from "nookies";

interface createdProps {
  name: string;
  email: string;
  password: string;
  document: string;
  document_type: string;
  phone: number;
}

export function Create() {
  const { register, handleSubmit } = useForm();

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const cookie = parseCookies();

    if (cookie.token) {
      setToken(cookie.token);
    }
  }, []);

  async function Created({
    name,
    email,
    password,
    document,
    document_type,
    phone,
  }: createdProps) {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        document,
        document_type,
        phone,
      }),
    });

    const apiCreate = await res.json();

    setToken(apiCreate.token);

    if (apiCreate.error) {
      throw new Error(apiCreate.message);
    }
    setCookie(null, "token", apiCreate.token, {
      maxAge: 60 * 60, // 1 hour
    });

    await Router.push("/user");
  }

  async function handleCreate(data: any) {
    try {
      await Created(data);
    } catch ({ message }) {
      alert(message);
    }
  }

  return (
    <CreateStyled>
      <div className="container">
        <h1>Criar Conta</h1>
        <form action="" method="POST" onSubmit={handleSubmit(handleCreate)}>
          <div className="create name">
            <label htmlFor="createName">
              Nome<span>*</span>
            </label>
            <input
              {...register("name")}
              name="name"
              type="text"
              id="createName"
              autoComplete="name"
              placeholder="Insira seu nome aqui"
              required
            />
          </div>

          <div className="create email">
            <label htmlFor="createEmail">
              Email<span>*</span>
            </label>
            <input
              {...register("email")}
              type="email"
              id="createEmail"
              name="email"
              autoComplete="email"
              placeholder="Insira seu email aqui"
              required
            />
          </div>

          <div className="create select-document">
            <div className="radio">
              <div className="cpf">
                <label htmlFor="createdocument_cpf">CPF</label>
                <input
                  {...register("document_type")}
                  type="radio"
                  name="document_type"
                  id="createdocument_cpf"
                  value="CPF"
                  checked
                />
              </div>

              <div className="cnpj">
                <label htmlFor="createdocument_cnpj">CNPJ</label>
                <input
                  {...register("document_type")}
                  type="radio"
                  name="document_type"
                  id="createdocument_cnpj"
                  value="CNPJ"
                />
              </div>
            </div>
          </div>

          <div className="create document">
            <label htmlFor="createEmail"></label>
            <input
              {...register("document")}
              type="number"
              id="createDocument"
              name="document"
              placeholder="Insira seu documento aqui"
              required
            />
          </div>

          <div className="create phone">
            <label htmlFor="createTel">
              Telefone<span>*</span>
            </label>
            <input
              {...register("phone")}
              type="telNo"
              id="createTel"
              name="phone"
              placeholder="Insira seu telefone aqui"
              autoComplete="phone"
              required
            />
          </div>

          <div className="create password">
            <label htmlFor="createTel">
              Senha<span>*</span>
            </label>
            <input
              {...register("password")}
              type="password"
              id="createPassword"
              name="password"
              placeholder="Insira sua senha aqui"
              required
            />
          </div>

          <input className="createButton" type="submit" value="Criar conta" />
        </form>
      </div>
    </CreateStyled>
  );
}
function singIn() {
  throw new Error("Function not implemented.");
}
