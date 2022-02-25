import styled from "styled-components";

export const CreateStyled = styled.section`
  padding-top: 5rem;

  .line-one,
  .line-two,
  .line-tree {
    display: flex;
    flex-direction: column;
  }

  .container {
    width: 40%;

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      text-align: center;
    }
    margin: 0 auto;
    form {
      text-align: center;
      label {
        text-align: start;
        font-size: 1rem;
        margin-bottom: 0.5rem;
        span {
          color: red;
        }
      }
      input {
        font-size: 0.8rem;
        margin-bottom: 1rem;
        height: 3rem;
        padding: 1rem;
      }

      .createButton {
        background-color: var(--red-500);
        color: var(--white);
        font-size: 1rem;
        font-weight: 700;
        border: none;
        border-radius: 2.4rem;
        width: 30%;
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      width: 90%;

      form {
        .createButton {
          width: 70%;
        }
      }
    }
  }
`;
