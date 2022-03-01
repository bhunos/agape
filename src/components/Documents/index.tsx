import React, { useContext } from "react";
import { Section } from "./styles";
import Image from "next/image";
import doc from "../../../public/image/doc.svg";
import download from "../../../public/image/download-file-square-line.svg";
import Link from "next/link";
import { AuthContext } from "../../contexts/AuthContext";

export const Documents = () => {
  const { user } = useContext(AuthContext);

  return (
    <Section>
      <div className="title">
        <h1>Documentos</h1>
      </div>
      <div className="container">
        <div className="perfil">
          <div className="image">
            <img src="" alt="Usuario" />
          </div>
          <h2></h2>
          <p></p>
          <Link href="#">
            <a>
              <button>Editar</button>
            </a>
          </Link>
        </div>
        <div className="content">
          <div className="card">
            <div className="header">
              <Image src={doc} alt="" />
              <h2></h2>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                viverra cursus pulvinar senectus lorem lacus.{" "}
              </p>
              <Link href="">
                <a>
                  <Image src={download} alt="" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
