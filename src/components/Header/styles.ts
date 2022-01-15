import styled from "styled-components"
import { ScrollProps } from "./index"

export const Nav = styled.nav<ScrollProps>`

  width: 100vw;
  height: 4.625rem;
  position: fixed;
  background: ${({ scroll }) => scroll ? '#000' : "trasparent"};
  transition: background 0.5s ease;
  z-index: 100;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  
  @media(max-width: 768px) {
    width: 100vw;
    justify-content: space-between;
    margin: 0 auto;

  
      .logo {
        width: 7rem;
        margin-left: 1rem;
    }
  }
}
`

