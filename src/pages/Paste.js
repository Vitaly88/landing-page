import React from "react";
import Headline from "../components/Headline";
//import Divider from "../components/Divider";
import Section from "../components/Section";
//import NewPaste from "../components/NewPaste";
import PasteForm from "../components/PasteForm";

function Paste({ match }) {
  const { id } = match.params;
  return (
    <Section>
      <Headline>Section</Headline>
      <PasteForm />
      {/* <NewPaste /> */}
    </Section>
  );
}

export default Paste;
