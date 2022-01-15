import styled from "styled-components"

export const AboutSection = styled.div`
width: 100%;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-evenly;
padding: 3.125rem 0; 
padding-right: 11%;

.imgSection {
  img{
    position: relative;
    left: -2rem;
    width: 40vw;
    border-radius: 1rem;
    
  }
}
.description {
  width: 50%;
  margin: 0 auto;
  h2 {
    margin-top: 1rem;
    font-family: "Roboto", sans-serif;
    font-size: 2.25rem;
    font-weight: bold;
    text-align: center;
  }
  
  p {
    margin-top: 1rem;
    font-family: "Poppins" , sans-serif;
    font-size: 1rem;
    font-weight: 200;
  }
}

@media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  padding: 3.125rem 0; 

  .imgSection {
    img{
      width:100vw;
      border-radius: 0;
      left: 0;
    }
  }

  .description {;
    width: 90%;
    
    h2 {
      font-size: 1.775rem;
      margin-top: 3.75rem;
      text-align: left;
    }

    p {
      margin-top: 2.4375rem;
      font-size: 0.8875rem;
    }
  }
}
`