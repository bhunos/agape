import styled from "styled-components"

export const ServicesContainer = styled.section`
    width: 100vw;
    padding: 5rem 0;
    
    h2 {
      font-size: 2.25rem;
      font-weight: bold;
      font-family: "Roboto", sans-serif;
      text-align: center;
    }
    
    .cards {
      display: flex;
      justify-content: center;
      align-items: baseline;
      gap: 3rem;
      margin: 3rem auto;
    }
    
    .section {
      display: flex;
      justify-content: center;
      gap: 3rem
      margin: 0 auto;

      }

    }
        
      .card {
        text-align: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 21.5rem;

        img {
          width: 7.0rem;
          height: 7.0rem;
        }

        h3 {
          margin-top: 1.25rem;
          font-size: 1.2rem;
          font-family: "Roboto", sans-serif;
          margin-bottom: 0.5rem
        }

        .line {
          height: 1px;
          background: var(--red-500);
          width: 10rem;
        }

        p {
          margin-top: 0.5rem;
          font-family: "Poppins", sans-serif;
          font-size: 1rem;
          font-weight: 200;
        }
    }

    @media (max-width: 1200px) {
      .cards {
      gap: 2.5rem;
    }
    
    .section {
      padding: 0 0rem;
      }
    }

    @media (max-width: 768px) {
      .cards {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        align-items: center;
      }
      
      .section {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .card {
        margin-top: 3.75rem;
        width: 50%;
      }
    }
`