import styled from "styled-components"
import { OpenProps } from "./index"



export const Div: any = styled.div<OpenProps>`
width: 2rem;
height: 2rem;
z-index: 100;
top: 0.9375rem;
right: 1.25rem;
display: flex;
justify-content: space-around;
flex-flow: column nowrap;
position: fixed;

div {
  display: none;
  width: 2rem;
  height: 0.25rem;
  background-color: ${({ open }) => open ? '#000' : '#ccc'};
  border-radius: 0.625rem;
  transform-origin: 0.0625rem;
  transition: all 0.3s linear;

  &:nth-child(1) {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  &:nth-child(2) {
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    opacity: ${({ open }) => open ? 0 : 1};
  }

  &:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
}


@media (max-width: 768px) {
    div {
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
    }
  }
`
