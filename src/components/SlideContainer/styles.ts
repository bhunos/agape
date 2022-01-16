import styled from "styled-components";


export const Section = styled.div`

.swiper {
  padding: 2rem;
}

.swiper-slide .image {
 margin-left: -6px;
  
}

.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {

  .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: var(--red-500);
}
}

.swiper.swiper-initialized.swiper-horizontal.swiper-pointer-events.carousel {
  .swiper-slide {
  }
  .swiper-button-prev{ 
    color: var(--red-500);
    padding-right: 25px;
  }
  .swiper-button-next{
    padding-left: 24px;
    color: var(--red-500);
  }
}
  width: 75vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  .carousel {
    width: 100vw;
    display: flex;
    margin: 0 auto;
    
    img {
      width: 100% !important;
      padding: 3rem !important;
    }
  }

  @media(max-width: 768px) {
    
    .swiper-wrapper {
      width: 100%!important;
      margin: 0 auto;
      margin-left: 34%;
    }

    .swiper-slide {
      opacity: 0;
      visibility: hidden;
      cursor: none;
      /* margin-left: 0%; */

    }

    .swiper-slide.image.swiper-slide-active {
      opacity: 1;
      
    }

    .carousel .image a img {
      position: relative;
      visibility: visible;
      padding: 0!important;
    }
}
`