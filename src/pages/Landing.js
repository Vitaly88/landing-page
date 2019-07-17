import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import Fullscreen from "../components/Fullscreen";
import MainLogo from "../components/MainLogo";
import MainHeadline from "../components/MainHeadline";
import Section from "../components/Section";
import Divider from "../components/Divider";

function Landing() {
  return (
    <>
      <Fullscreen>
        <BackgroundImage src="https://cdn.pixabay.com/photo/2019/06/24/10/32/venice-4295681_1280.jpg" />
        <MainLogo />
        <MainHeadline>Bella Venezia!</MainHeadline>
      </Fullscreen>
      <Section>
        <h2>Venezia e una citta piu bella</h2>
        <Divider />
        React 16.8
        <br />
        Styled components
        <br />
        React Router
        <br />
        PropTypes and a lot of 🍌
        <br />
        <button> 🍌About Me</button>
      </Section>
    </>
  );
}

export default Landing;
