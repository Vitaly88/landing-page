import styled from "styled-components";
import { fadeIn } from "../utils/animations";

const ScrollDown = styled.a`
  font-size: 10px;
  text-decoration: none;
  color: white;
  transform: rotate(-90deg);
  /* animation: ${fadeIn} 1s ease-in 1 both; */
  transition: ease-in;
  animation-iteration-count: infinite;
`;

export default ScrollDown;
