import styled from "styled-components";

export const Section = styled.div`

background: #d7d7d7;
width: 100vw;
padding: 5rem 0;
margin: 0 auto;

.contentLogo {
  width: 70vw;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  p {
    margin-top: 1rem;
    margin-left: 2rem;
  }

  .image {
    display: flex;
    width: 200px;
    margin: 0 auto;
  }
}

.social {
  a {
    & + a {
      margin-left: 1rem;
    }
    }
  }
}

.floatButton {
  position: fixed;
  z-index: 99;
  right: 0;
  bottom: 0;
  border-radius: 8rem;
  width: 70px;
  height: 70px;

  a {
    display: flex;
    align-items: ;
    justify-content: center;

    img {
      width: 50px!important;
      
    }
  }
}

@media (max-width: 768px) {
  .contentLogo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .social {
    margin-top: 3rem;
  }
}
`