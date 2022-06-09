import styled from "styled-components";

export const CreateStyled = styled.section`
  padding-top: 5rem;
  .container {
    width: 40rem;

    h1 {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 1rem;
    }
    margin: 0 auto;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      .create {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;

        label {
          font: 1rem;
          margin-top: 0.5rem;
        }

        input {
          width: 100%;
          height: 2.5rem;
          font-size: 0.8rem;
          padding: 0.5rem;
        }
      }

      .select-document {
        .radio {
          margin-top: 1rem;
          display: flex;
          justify-content: center;
          gap: 1rem;
          align-items: center;
          cursor: pointer;

          input {
            width: auto;
            height: auto;
          }

          .cpf,
          .cnpj {
            display: flex;
            gap: 0.5rem;
            align-items: center;
          }
        }
      }

      .createButton {
        font-size: 1rem;
        padding: 0.5rem 1rem;
        color: var(--white);
        background: var(--red-500);
        border: none;
        border-radius: 2rem;
        width: 9rem;
        margin-top: 1rem;
        height: 2.5rem;
        margin-bottom: 5rem;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 3rem;

    .container {
      width: 100%;
    }
  }
`;
