import styled from "styled-components";

export const Section = styled.div`
width: 100vw;
padding: 5rem 0;

h1 {
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: bold;
}
.create {
        a {
        display: flex;
        justify-content: center;
            button {
                margin-top: 1rem;
                
                width: 12.3rem;
                height: 3rem;
                border-radius: 2rem;
                border: none;
                background: var(--red-500);
                color: var(--white);
                cursor: pointer;
                font-size: 1.2rem;
            }
        }
      }


.container {
  width: calc(100% - 30%);
  padding-top: 2rem ;
  margin: 0 auto;

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

    h1 {
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
      cursor: pointer;
    }

  }

  .content {
    width: 100%;

    .card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        background: #F4F4F4;
        padding: 1rem;
        border-radius: 2rem;
      
      .header {
        display: flex;
        align-items: center;
        
        img {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50rem;
          margin-right: 1rem;
        }
      }

      
      .open {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-gap: .5rem;
      
       li {
       list-style: none;
       cursor: pointer;
       
       img {
       width: 2.5rem;
       }
      }
    }
  }
}

@media (max-width: 1200px) {
  width: 100%;
  
  .create {
        a {
            button {
            float: unset;
            
                    }
                }
            }
  
  .container{
    width: 90%;
    margin: 0 auto;
    padding-top: 1rem;
    
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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        .header {
            display: flex;
            flex-direction: column;
        
            img{
                margin: 0;
                width: 4.5rem;
                height: 4.5rem;
            }
        
        h1{
            margin-top: 1rem;
            margin-bottom: 0.5rem;
        }
        
      }
      
    }
  }

}
`