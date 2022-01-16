import React from "react"
import { Section } from "./styles"
import Image from "next/image"
import logoteste from "../../../public/image/logoteste.png"
import doc from "../../../public/image/doc.svg"
import download from "../../../public/image/download-file-square-line.svg"
import Link from "next/link"

export const Documents = () => {
  return (
    <Section>
      <div className="title">
        <h1>Documentos</h1>
      </div>
      <div className="container">
        <div className="perfil">
          <div className="image">
            <Image src={logoteste} alt="Usuario" />
          </div>
          <h2>Name User</h2>
          <p>29.123.123.0001-00</p>
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
              <h2>name Doc</h2>
            </div>
            <div className="description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A viverra cursus pulvinar senectus lorem lacus. </p>
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
  )
}