import React, { useEffect } from 'react'
import { OpenProps } from '../HamburgerMenu'
import { SinginButton } from '../SinginButton'
import { Ul } from './styles'

export const RingthNav = ({ open, onClickLink }: OpenProps) => {

  useEffect(() => {
  }, [])

  return (
    <Ul open={open} id="menu">
      <li>
        <a href="#home" onClick={onClickLink}>Início</a>
      </li>
      <li>
        <a href="#about" onClick={onClickLink}>Sobre</a>
      </li>
      <li>
        <a href="#services" onClick={onClickLink}>Serviços</a>
      </li>
      <li>
        <a href="#contact" onClick={onClickLink}>Contato</a>
      </li>
      <SinginButton />
    </Ul>
  )
}
