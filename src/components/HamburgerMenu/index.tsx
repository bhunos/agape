import React, { useState } from 'react'
import { RingthNav } from '../RigthNav';
import { Div } from './styles'

export interface OpenProps {
  open: boolean;
  onClickLink: () => void;
}


const HamburgerMenu = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <Div open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Div>
      <RingthNav open={open} onClickLink={() => setOpen(false)} />

    </>
  )
}

export default HamburgerMenu
