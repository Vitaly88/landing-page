//import styled from "styled-components";
import React from "react";

function ButtonLink({ children, ...other }) {
  return <button onClick={other}>{children}</button>;
}

export default ButtonLink;
