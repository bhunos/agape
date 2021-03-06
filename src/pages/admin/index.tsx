import type { GetServerSideProps, NextPage } from "next";
import { Divider } from "../../components/Divider";
import { Footer } from "../../components/footer";
import { HeroUser } from "../../components/HeroUser";
import { Section } from "../../styles/adminStyles";
import Image from "next/image";
import entrar from "../../../public/image/entrar.png";

import React from "react";
import { BASE_URL } from "../../config";
import Gravatar from "react-gravatar";
import Link from 'next/link'

const User: NextPage = ({ data }: any) => {
  let rows = [];

  for (let item in data) {
    const gravatar = data[item];
    rows.push(
      <div className="card" key={item}>
        <div className="header">
          <Gravatar email={gravatar.email} />
          <h1>{gravatar.name}</h1>
        </div>
        <ul className="open">
          {/* <li>
            <a href="/delete">
              <img src="image/delete.png" alt="Deletar" />
            </a>
          </li>
          <li>
            <a href="/update">
              <img src="image/editar.png" alt="editar" />
            </a>
          </li> */}
          <li>
            <Link href={`/${gravatar.id}`}>
            <a>
              <img src="image/entrar.png" alt="Entrar" />
            </a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <>
      <HeroUser />
      <Divider />
      <Section>
        <div className="title">
          <h1>Clientes</h1>
        </div>
        <div className="create">
          <Link href="/registrar">
          <a className="open">
            <button>Criar Usuario</button>
          </a>
          </Link>
        </div>
        <div className="container">
          <div className="content">{rows}</div>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }: any) => {
  const response = await fetch(`${BASE_URL}/admin/list-clients`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
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

export default User;
