import { useState, useEffect } from 'react'
import HamburgerMenu from '../HamburgerMenu'
import { Nav } from "./styles"

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
        <a href="#">
          <img src="./image/logo.svg" alt="Agape" />
        </a>
      </div>
      <HamburgerMenu />
    </Nav>
  )
}