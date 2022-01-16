import Link from 'next/link'
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
        <Link href="/#home">
          <a onClick={onClickLink}>Início</a>
        </Link>
      </li>
      <li>
        <Link href="/#about">
          <a onClick={onClickLink}>Sobre</a>
        </Link>
      </li>
      <li>
        <Link href="/#services">
          <a onClick={onClickLink}>Serviços</a>
        </Link>
      </li>
      <li>
        <Link href="/#contact">
          <a onClick={onClickLink}>Contato</a>
        </Link>
      </li>
      <SinginButton />
    </Ul>
  )
}
