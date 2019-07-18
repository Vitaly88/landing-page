import styled from "styled-components";

const Avatar = styled.img`
  border-radius: 50%;
  height: ${props => props.height || "100px"};
  width: ${props => props.width || "100px"};
`;

export default Avatar;
