import React from "react";
import ButtonLink from "../components/ButtonLink";
import Section from "../components/Section";
import Headline from "../components/Headline";
import Divider from "../components/Divider";
import Avatar from "../components/Avatar";

function About() {
  return (
    <Section>
      <Headline>About</Headline>
      <Divider />
      <Avatar src="./IMG_20190717_155334.jpg" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum
        sapiente optio, unde exercitationem corporis sed ut mollitia quo
        voluptatem magnam! Iusto recusandae soluta molestiae, iure libero totam
        quibusdam repellendus!
      </p>
      <ButtonLink to="/" onClick={() => {}}>
        Back
      </ButtonLink>
    </Section>
  );
}

export default About;
