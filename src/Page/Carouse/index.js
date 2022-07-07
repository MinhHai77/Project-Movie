import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";

import HeroSection from "../HeroSection";
import { Container } from "./Carouse";
const Carouse = () => {
  const { bannerImage, trailer } = useSelector((state) => state.ban);
  if (bannerImage.length === 0) return;
  return (
    <Container>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={bannerImage[0].hinhAnh}
            alt="First slide"
          />
          <HeroSection trailer={trailer[0]} />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannerImage[1].hinhAnh}
            alt="Second slide"
          />
          <HeroSection trailer={trailer[1]} />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannerImage[2].hinhAnh}
            alt="Third slide"
          />
          <HeroSection trailer={trailer[2]} />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Carouse;
