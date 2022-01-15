import styled from "styled-components"

export const Section = styled.div`
  background-image: url("/image/hero.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* overflow: hidden; */
  
  max-width: 100vw;
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
    margin: 0 auto;
    
      
      h1 {
        font-family: "Poppins", sans-serif;
        font-size: 3.125rem;
        color: var(--white);
        
      } 
      
      p {
        width: 80%;
        font-family: "Roboto", sans-serif;
        font-weight: 100 ;
        font-size: 1rem;
        color: var(--white);
        margin-top: 1rem;
      }
    }
  
  }
  
@media (max-width: 768px) {
  div {
    width: 90%;

    h1 {
      font-size: 1.75rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
}

`