import styled from "styled-components";

export const Section = styled.div`
  padding: 5rem 0;
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;

  .info {
    width: 50vw;

    h2 {
      font-size: 2.5rem;
    }

    p {
      margin-top: 1rem;
      font-size: 1.25rem;
    }

    a {
      button {
        border-radius: 5rem;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 250px;
        height: 50px;
        border: none;
        background: #FAFAFA;
        border: 1px solid var(--gray);
        gap: 0.5rem;

        margin-top: 0.8rem;
        cursor:pointer;
        transition: all 0.4s;

        &:hover {
          filter: drop-shadow(1px 1px 2px black) invert(1%);
        }
      }


    }
  }

  .contacts {
    .matriz {
      a {
     display: flex;
     align-items: center;
     margin-top: 0.9rem;
     gap: 1rem;
     }

     .localization {
        img {
          width: 30px!important;
        }
      }
    }

    .filial {
      h1 {
        margin-left: 4rem;
        margin-top: 10px;
        font-size: 18px;



      }

      a {
     display: flex;
     align-items: center;
     margin-top: 0.9rem;
     gap: 1rem;
     }

     .localization {
        img {
          width: 30px!important;
        }
      }
    }

    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;

    .info {
      width: 70%;


      a {
        button {
          height: 50px;
          margin: 2rem auto 0;

        }

      }
    }

    .contacts {
      width: 70%;

     .filial {
       h1 {
         text-align: center;
         margin-left: 0;
       }

      .localization {
        img {
          width: 50px!important;
        }
      }
     }
    }

  }
`;
