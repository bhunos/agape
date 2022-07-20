import Link from 'next/link'
import { destroyCookie, parseCookies } from 'nookies'
import React, { useEffect, useState } from 'react'
import { OpenProps } from '../HamburgerMenu'
import { SinginButton } from '../SinginButton'
import { Ul } from './styles'

export const RingthNav = ({ open, onClickLink }: OpenProps) => {

  const { token } = parseCookies();

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
      {token ? (<Link href="/user">
        <img className='user' src="/image/user.svg" onClick={onClickLink} />
      </Link>): null}
      <SinginButton open={false} onClickLink={function (): void {
        throw new Error('Function not implemented.')
      } } />
    </Ul>
  )
}
