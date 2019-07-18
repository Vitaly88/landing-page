//import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "./Button";

function ButtonLink({ children, to, ...other }) {
  return (
    <Link to={to}>
      <Button {...other}>{children}</Button>
    </Link>
  );
}

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
};
export default ButtonLink;
