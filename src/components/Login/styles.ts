import styled from "styled-components";

export const Section = styled.div`
  padding: 10rem;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    width: 50%;
    height: 80%;
    background: var(--white);
    border-radius: 2rem;
    margin: 0 auto;
    z-index: 100;

    .close {
      width: 100%;
      display: flex;
      justify-content: end;
      cursor: pointer;

      margin-right: 4rem;
      img {
        width: 1.5rem;
      }
    }

    h1 {
      text-align: center;
      font-size: 2.5rem;
      font-weight: bold;
      font-family: "Poppins", sans-serif;
    }

    p {
      margin-top: 1rem;
      text-align: center;
      font-size: 1rem;
    }

    form {
      width: 100%;
      display: flex;

      label {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
          margin-top: 2rem;
          width: 100%;

          height: 3rem;

          &::placeholder {
            padding: 1rem;
          }
        }

        #singinButton {
          background: var(--red-500);
          width: 30%;
          color: var(--white);
          font-size: 1rem;
          border-radius: 2rem;
          border: none;
          cursor: pointer;
          transition: filter 0.5s;

          &:hover {
            filter: brightness(0.8);
          }
        }
      }
    }

    .links {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        font-size: 1rem;
        margin-top: 1.5rem;

        &:nth-child(2) {
          font-size: 1rem;
          font-weight: 500;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 5rem 2rem;

    .content {
      width: 100%;
      .close {
        width: 100%;
        display: flex;
        justify-content: end;
        cursor: pointer;
        margin-right: 4rem;

        img {
          width: 1.5rem !important;
        }
      }

      h1 {
        font-size: 1.5rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }
`;
