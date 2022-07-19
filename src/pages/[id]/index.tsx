import { Contact } from "../../components/Contact";
import { Divider } from "../../components/Divider";
import { Footer } from "../../components/footer";
import { HeroUser } from "../../components/HeroUser";
import { Section } from "../../components/Documents/styles";
import Image from "next/image";
import Gravatar from "react-gravatar";
import { BASE_URL } from "../../config";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { parseCookies } from "nookies";

import doc from "../../../public/image/doc.svg";
import download from "./../../../public/image/download-file-square-line.svg";
import trash from "./../../../public/image/delete.png";

interface dataProps {
  data: {
    id: string;
    email: string;
    name: string;
    document: string;
    documents: {};
  };
}

export default function User({ data }: dataProps) {
  const { register, handleSubmit } = useForm();
  const [dropdown, setDropdown] = useState("");
  const [isDonwload, setIsDonwload] = useState("");
  const id = data.id;
  const { token } = parseCookies();

  const showDropdown = () => {
    const openModal = document.querySelector(".formModal");
    if (dropdown === "") {
      openModal?.classList.add("active");
    }
  };

  const closeDropdown = () => {
    const closeModal = document.querySelector(".close");
    const openModal = document.querySelector(".formModal");

    closeModal?.addEventListener("click", () => {
      openModal?.classList.remove("active");
    });
  };

  async function upDocument(formValues: any) {
    const file = formValues.file[0];
    const data = new FormData();
    data.append("file", formValues.file[0]);
    data.append("clientId", id);
    data.append("name", formValues.name);
    data.append("description", formValues.description);

    await fetch(`${BASE_URL}/admin/upload-document`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });
    window.location.reload();
  }

  let rows = [];

  for (let i in data.documents) {
    // @ts-ignore
    const document = data.documents[i];

    rows.push(
      <div className="card" key={i}>
        <div className="header">
          <Image src={doc} alt="teste" />
          <h2>{document.name}</h2>
        </div>
        <div className="description">
          <p>{document.description}</p>
          <a href="">
            <Image src={trash} alt="teste"></Image>
          </a>
          <a>
            <Image src={download} alt="teste" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <HeroUser />
      <Divider />
      <Section>
        <div className="title">
          <h1>Documentos</h1>
          <div className="docUp">
            <button onClick={showDropdown}>Adicionar documento</button>
          </div>
          <div className="formModal">
            <div className="containerForm">
              <div className="close" onClick={closeDropdown}>
                <div></div>
                <div></div>
              </div>
              <p>Enviar Documento</p>
              <form action="" method="POST" onSubmit={handleSubmit(upDocument)}>
                <label htmlFor="name">Nome</label>
                <input
                  {...register("name")}
                  placeholder="Nome do documento"
                  type="text"
                  name="name"
                  required
                />
                <label htmlFor="description">Descrição</label>
                <input
                  {...register("description")}
                  placeholder="Descrição do documento"
                  type="text"
                  name="description"
                  required
                />
                <input
                  {...register("file")}
                  type="file"
                  name="file"
                  id="file"
                  required
                />
                <button type="submit" id="submitDocument">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="perfil">
            <div className="image">
              <Gravatar email={data.email} />
            </div>
            <h2>{data.name}</h2>
            <p>{data.document}</p>
          </div>
          <div className="content">
            {!rows.length ? <h2>Nenhum documento encontrado</h2> : rows}
          </div>
        </div>
      </Section>
      <Divider />
      <Contact />
      <Divider />
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}: any) => {
  const response = await fetch(`${BASE_URL}/admin/client/${params.id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${req.cookies.token}`,
    },
  });

  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
