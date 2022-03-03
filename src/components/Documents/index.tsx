import React, { useState } from "react";
import { Section } from "./styles";
import Image from "next/image";
import doc from "../../../public/image/doc.svg";
import download from "../../../public/image/download-file-square-line.svg";
import Link from "next/link";
import { BASE_URL } from "../../config";
import { GetStaticProps } from "next";
import axios from "axios";

export const Documents = ({ user }: any) => {
  console.log(user);

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
          <h2>{user?.name}</h2>
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
              <Link href="/dowload">
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
