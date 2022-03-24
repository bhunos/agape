import React from "react";
import { Container } from "./styles";
import Image from "next/image";
import women from "../../../public/image/women.png";
import Link from "next/link";

export function Subscribe() {
  return (
    <Container>
      <div className="textContainer" id="subscribeArrow">
        <h2>Você sabe, o que é contabilidade Digital?</h2>
        <p>
          Ter a contabilidade na palma da sua mão é possível. Atendemos todo o
          Brasil.
        </p>
        <div className="buttons">
          <Link href="/entrar">
            <button>Entrar</button>
          </Link>
        </div>
      </div>
      <div className="imageContainer">
        <Image src={women} alt="" />
      </div>
    </Container>
  );
}
