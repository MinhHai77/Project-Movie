import styled from "styled-components";

export const Container = styled.div`
  & > a {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: ${({ disp }) => (disp ? "unset" : "none")};
    opacity: 0.6;
  }
`;
