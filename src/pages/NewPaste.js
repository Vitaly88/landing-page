import React from "react";
import Headline from "../components/Headline";
//import Divider from "../components/Divider";
import Section from "../components/Section";
import PasteForm from "../components/PasteForm";

function NewPaste({ match }) {
  return (
    <Section>
      <Headline>Add your Comment</Headline>
      <PasteForm />
    </Section>
  );
}

export default NewPaste;
