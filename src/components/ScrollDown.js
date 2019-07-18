import styled from "styled-components";
import { fadeIn } from "../utils/animations";

const ScrollDown = styled.a`
  position: absolute;
  bottom: 50px;
  font-size: 10px;
  text-decoration: none;
  color: white;
  animation: ${fadeIn};
  transform: rotate(-90deg) translateX(0);
`;

export default ScrollDown;
