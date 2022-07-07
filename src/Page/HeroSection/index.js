import React, { useRef, useState } from "react";
import ModalVideo from "react-modal-video";
import { ButtonDefault } from "../../components/Button/Button";
import getVideoId from "get-video-id";
import { Container } from "./HeroSection";
import "react-modal-video/scss/modal-video.scss";

const HeroSection = ({ trailer }) => {
  const [isOpen, setOpen] = useState(false);
  const [isDisplay, setIsDispaly] = useState(true);
  const { id } = getVideoId(trailer);
  const onModal = () => {
    setOpen(true);
    setIsDispaly(false);
  };
  const offModal = () => {
    setOpen(false);
    setIsDispaly(true);
  };
  return (
    <React.Fragment>
      <Container disp={isDisplay}>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={id}
          onClose={offModal}
        />

        <ButtonDefault onClick={onModal}>Watch trailer</ButtonDefault>
      </Container>
    </React.Fragment>
  );
};

export default HeroSection;
