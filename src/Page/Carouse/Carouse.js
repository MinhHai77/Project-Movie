import styled from "styled-components";

export const Container = styled.div`
  img {
    height: 500px;
    background-position: cover;
  }
  .carousel-indicators > [data-bs-target] {
    background-color: #fff;
  }
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 4rem;
    height: 4rem;
    filter: none !important;
    color: #fff;
  }
`;
