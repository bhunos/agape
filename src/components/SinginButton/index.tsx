import { parseCookies, destroyCookie } from "nookies";
import React, {useState } from "react";
import Link from 'next/link'
import { Login } from "../Login";

import { Content } from "./styles";
import { OpenProps } from "../HamburgerMenu";

export interface IsModalVisible {
  isModalVisible: boolean;
  onClickLink: () => void;
}

export function SinginButton({ open, onClickLink }: OpenProps) {
  const { token } = parseCookies();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const logout = () => {
    destroyCookie({}, 'token')
    window.location.href = '/entrar';
  }

  return (
    <>
      <Content>
        {token ? (
          <div onClick={logout}>
            <p>Sair</p>
          </div>
        ) : (
            <Link href="/entrar">
            <a onClick={onClickLink}>
            <p>Entrar</p>
          </a>
            </Link>
        )}
      </Content>
      {isModalVisible ? <Login /> : null}
    </>
  );
}
