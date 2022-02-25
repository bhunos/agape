import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 5rem 0 0;
  gap: 1rem;
  margin: 0 auto;

  .textContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-family: "Roboto", sans-serif;
      font-size: 2.25rem;
    }
    p {
      margin-top: 1.6rem;
      font-size: 1.125rem;
    }

    .buttons {
      display: flex;
      gap: 2rem;

      button {
        font-family: "Roboto", sans-serif;
        font-size: 1.4375rem;
        margin-top: 3.6875rem;
        color: var(--white);
        background: var(--red-500);
        border: none;
        border-radius: 5rem;
        width: 30%;
        height: 3.125rem;

        transition: filter 0.5s;
      }

      button:hover {
        cursor: pointer;
        filter: brightness(0.8);
      }
    }
  }

  .imageContainer {
    img {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    display: block;
    text-align: center;
    padding-top: 5rem;

    .imageContainer {
      max-width: 50%;
      max-height: 100%;
      margin: 0 auto;
    }

    .textContainer {
      display: flex;
      align-items: center;
      width: 85%;
      margin: 0 auto;

      .buttons {
        button {
          font-size: 98%;
          width: 8rem;
        }
      }
    }
  }
`;
