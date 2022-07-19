import React, { useState, useEffect } from 'react'
import HamburgerMenu from '../HamburgerMenu'
import { Nav } from "./styles"
import Image from "next/image"
import logo from "../../../public/image/logo.svg"
import Link from 'next/link'

export interface ScrollProps {
  scroll: boolean;
}

export function Header() {

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    function scrollPositon() {
      if (window.scrollY > 5) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', scrollPositon)
  }, []);


  return (
    <Nav className="content" scroll={scroll} onScroll={() => setScroll(!scroll)}>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src={logo} alt="Agape" />
          </a>
        </Link>
      </div>
      <HamburgerMenu />
    </Nav>
  )
}
