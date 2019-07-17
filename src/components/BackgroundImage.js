import styled from "styled-components";

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0.7) saturate(0.8);
`;

export default BackgroundImage;
