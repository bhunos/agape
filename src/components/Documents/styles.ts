import styled from "styled-components";

export const Section = styled.div`
width: 100vw;
padding: 5rem 0;

h1 {
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: bold;
}

.container {
  width: calc(100% - 30%);
  padding-top: 5rem ;
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 0 auto;
  gap: 1rem;

  .perfil {
    display: flex;
    height: 28.56rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #F4F4F4;
    gap: 2rem;
  
    border-radius: 2rem;

    .image {
      display: flex;
      justify-content: center;
      img{
        width: 60%;
        border-radius: 50rem;

      }
      
    }

    h2 {
      font-family: "Poppins", sans-serif;
      font-size: 1.3rem;
      font-weight: 400;
    }

    p {
      font-family: "Roboto", sans-serif;
      font-size: 0.8rem;
    }

    button {
      width: 7.3rem;
      height: 1.5rem;
      border-radius: 2rem;
      border: none;
      background: var(--red-500);
      color: var(--white);
    }

  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .card {
      background: #F4F4F4;
      padding: 1rem;
      border-radius: 2rem;
      
      .header {
        display: flex;
        align-items: center;
        
        img {
          width: 79px;
        }
      }

      
      .description {
        display: flex;
        align-items: end;
        p {
          margin-top: 1rem;
          padding: 0 8rem 0 1rem;
        }

        img {
          margin-right: 1rem;
          width: 30px;

        }
      }
    }
  }
}

@media (max-width: 1200px) {
  width: 100%;
  
  .container{
    width: 90%;
    grid-template-columns: 3fr;
    margin: 0 auto;
    .perfil {
      display: flex;
      height: auto;
      padding: 2rem;
      
      .image {
        
        img {
          width: 50%;
        }
      }
    }
    .content{

      .card {
        .description{
          justify-content: space-between;
          p {
            padding: 0px 1rem 0 1rem;
          }
        }
      }
      
    }
  }

}
`