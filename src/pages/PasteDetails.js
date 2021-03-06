import React from "react";
import Section from "../components/Section";
import Subtitle from "../components/Subtitle";
import Divider from "../components/Divider";
import Content from "../components/Content";
import { getPaste } from "../utils/pasteApi";
import ButtonLink from "../components/ButtonLink";

function PasteDetails({ match }) {
  const [paste, setPaste] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { id } = match.params;

  React.useEffect(() => {
    getPaste(id)
      .then(paste => setPaste(paste))
      .then(() => setLoading(false))
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [id]); //returns id repeatedly

  console.log(paste);
  return (
    <Section>
      {!loading && !paste && <div>Paste {id} Not found</div>}
      {!loading && paste && (
        <div>
          <Subtitle>{paste.title}</Subtitle>
          <Divider />
          <Content>{paste.text}</Content>
          <br />
          <ButtonLink to="/paste">Back</ButtonLink>
        </div>
      )}
      {loading && <div>Loading...</div>}
    </Section>
  );
}

export default PasteDetails;
