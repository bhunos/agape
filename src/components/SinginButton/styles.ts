import styled from "styled-components"
import { IsModalVisible } from "./index"


export const Content = styled.button`
  width: 6.875rem;
  height: 2.5625rem;
  border-radius: 3.125rem;
  border: none;
  background: var(--red-500);
  color: var(--white);
  font-size: 1rem;
  cursor: pointer;
  
  transition: filter 0.5s;

&:hover {
  filter: brightness(0.8);
}
`