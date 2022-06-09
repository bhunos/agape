import Link from "next/link";
import { parseCookies } from "nookies";
import React, { useState } from "react";
import { Login } from "../Login";

import { Content } from "./styles";

export interface IsModalVisible {
  isModalVisible: boolean;
  onClickLink: () => void;
}

export function SinginButton() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { token } = parseCookies();

  return (
    <>
      <Content>
        {token ? (
          <Link href="/sair">
            <a>Sair</a>
          </Link>
        ) : (
          <Link href="/entrar">
            <a>Entrar</a>
          </Link>
        )}
      </Content>
      {isModalVisible ? <Login /> : null}
    </>
  );
}
