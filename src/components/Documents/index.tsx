import React, { useEffect, useState } from "react";
import { Section } from "./styles";
import Image from "next/image";
import doc from "../../../public/image/doc.svg";
import download from "../../../public/image/download-file-square-line.svg";
import Link from "next/link";
import { BASE_URL } from "../../config";
import Gravatar from "react-gravatar";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

export const Documents = () => {
  const { token } = parseCookies();

  const [data, setData] = useState({
    id: "",
    email: "",
    name: "",
    document: "",
    documents: {},
  });

  async function getData() {
    const response = await fetch(`${BASE_URL}/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

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
          <a download>
            <Image src={download} alt="teste" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <Section>
      <div className="title">
        <h1>Documentos</h1>
      </div>
      <div className="container">
        <div className="perfil">
          <div className="image">
            <Gravatar className="gravatar" email={data.email} />
          </div>
          <h2>{data.name}</h2>
          <p>{data.document}</p>
        </div>
        <div className="content">
          {!rows ? <h2>Nenhum documento encontrado</h2> : rows}
        </div>
      </div>
    </Section>
  );
};
