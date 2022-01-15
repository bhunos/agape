import React, { useState } from 'react';
import { ModalLogin } from '../ModalLogin';

import { Content } from "./styles"

export interface IsModalVisible {
  isModalVisible: boolean;
  onClickLink: () => void;
}

export function SinginButton() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <>
      <Content className="singinButton" onClick={() => setIsModalVisible(true)}>
        Entrar
      </Content>
      {isModalVisible ? <ModalLogin isModalVisible={isModalVisible} onClickLink={() => setIsModalVisible(false)} /> : null}
    </>
  )
}