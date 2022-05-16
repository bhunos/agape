import styled from "styled-components";

export const Section = styled.div`
width: 100vw;
padding: 5rem 0;

.formModal {
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.8);
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
      
 p {
   margin-bottom: 1rem;
   text-align: center;
   font-size: 1.5rem;
   font-weight: bold;
 }
  
 .containerForm {
      width: 50%;
      height: 50%;
      background-color: #fff;
      padding: 2rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: relative;
      border-radius: 30px;
      form {
      display: flex;
      position: relative;
      flex-direction: column;
      
      close {
      }
   
   label {
   margin-bottom: 5px;
   }
   
   input {
       margin-bottom: 1rem;
       width: 100%;
       height: 3rem;
       padding: 0.5rem;
   }
   button {
      width: 6.875rem;
      height: 2rem;
      border-radius: 3.125rem;
      border: none;
      background: var(--red-500);
      color: var(--white);
      font-size: 1rem;
      cursor: pointer;
      
      transition: filter 0.5s;

&:hover {
  filter: brightness(0.8);
}
   }
  }
 }
}
form {
display: flex;
flex-direction: column;
}
}

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
     .gravatar {
         width: 100px;
         height: 100px;
         border-radius: 50rem;
       } 
      
    }

    h2 {
      font-family: "Poppins", sans-serif;
      font-size: 1.3rem;
      font-weight: 400;
      text-align: center;
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
      cursor: pointer;
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
      }

      
      .description {
        display: flex;
        align-items: end;
        p {
          margin-top: 1rem;
          width: 90%;
          margin-left: 1rem
        }

        img {
          margin-right: 1rem;
          width: 30px!important;

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
       .gravatar {
         width: 100px;
         height: 100px;
         border-radius: 50rem;
       } 
      }
    }
    .content{

      .card {
        .description{
          justify-content: space-between;
          p {
            margin-left: 1rem ;
          }
        }
      }
      
    }
  }

}
`