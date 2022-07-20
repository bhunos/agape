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
          padding: 1rem;

          height: 3rem;
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
        cursor: pointer;

        &:nth-child(2) {
          font-size: 1rem;
          font-weight: 500;
        }
      }
    }
  }

  .forgot-password.active {
    display: block;

    .forgot-password--container {
      top: 50% !important;
      transition: all 0.5s;

      .close {
        cursor: pointer;
        position: absolute;
        top: 1rem;
        right: 2rem;
        z-index: 999;

        div {
          content: "";
          position: absolute;
          width: 2px;
          height: 1rem;
          background-color: #000;
        }

        div:nth-child(1) {
          transform: rotate(45deg);
        }

        div:nth-child(2) {
          transform: rotate(-45deg);
        }
      }
    }
  }

  .forgot-password {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;

    &--container {
      z-index: 100;
      position: absolute;
      background: var(--white);
      width: 50%;
      height: 36%;
      top: -50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.5s;
      border-radius: 2rem;
      padding: 2rem;

      header {
        .close {
          position: absolute;
          top: 1.2rem;
          right: 1.2rem;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
        }
      }

      h1 {
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        font-family: "Poppins", sans-serif;
        margin-top: 2rem;
        cursor: pointer;
      }

      form {
        display: flex;
        flex-direction: column;

        label {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;

          input {
            margin-top: 2rem;
            width: 80%;
            padding: 1rem;
            height: 3rem;
            border: 0.1px solid;
          }

          #forgotButton {
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

      .links {
        display: flex;
        flex-direction: column;
      }
    }

    .forgot-password {
      z-index: 9999;
      &--container {
        width: 90%;
        height: 36%;
        padding: 2.5rem 0.5rem;

        header {
          .close {
            font-size: 0.8rem;
          }
        }

        h1 {
          text-align: center;
          font-size: 1.8rem;
        }
      }
    }
  }
`;
