import Link from "next/link";
import React, { useState } from "react";
import { Login } from "../Login";

import { Content } from "./styles";

export interface IsModalVisible {
  isModalVisible: boolean;
  onClickLink: () => void;
}

export function SinginButton() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <Content>
        <Link href="login">
          <a>Entrar</a>
        </Link>
      </Content>
      {isModalVisible ? <Login /> : null}
    </>
  );
}
