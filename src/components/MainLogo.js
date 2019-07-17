import styled from "styled-components";
import Logo from "./Logo";
import { fadeIn } from "../utils/animations";

const MainLogo = styled(Logo)`
  width: 300px;
  height: auto;
  animation: ${fadeIn} 3s ease-in 1 both;
`;

export default MainLogo;
