import styled from "styled-components"

export interface OpenProps {
  open: boolean;
}

export const Ul = styled.ul<OpenProps>`

  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  li {
    padding: 1.125rem 1.75rem;


    a {
      position: relative;
      transition: color 0.2s;
      color: var(--white);

    }
    a::after {
      content:'';
      width: 0%;
      height: 2px;
      background: red;

      position: absolute;
      left: 0;
      bottom: -1.5rem;

      transition: width 0.2s;
    }
    a:hover::after {
      width: 100%;
    }

    a:hover {
      color: var(--red-500);
    }
  }

  .user{
    width: 2.6rem;
    margin-right: 1rem;
    cursor: pointer;
  }

@media(max-width: 768px){

  flex-flow: column nowrap;
  background: var(--white);
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding-top: 8.3125rem;
  transition: transform 0.3s ease-in-out ;

  li {
      padding: 2.125rem 1.75rem;

      a {
        color: var(--black)
      }
    }

    .user{
      position: absolute;
      top: .8rem;
      right: 3rem;
    width: 2.3rem;
    cursor: pointer;
  }
  }
`
