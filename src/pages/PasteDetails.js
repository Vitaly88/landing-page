import React from "react";
import Section from "../components/Section";
//import Headline from "../components/Headline";
import Subtitle from "../components/Subtitle";
import Divider from "../components/Divider";
import Content from "../components/Content";
import { getPaste } from "../utils/pasteApi";

// const tempData = {
//   1: {
//     title: "Some Paste Title",
//     text: "Some text input"
//   },
//   2: {
//     title: "Another Paste Title",
//     text: "Some text input\nAnd another text"
//   }
// };

function PasteDetails({ match }) {
  const [paste, setPaste] = React.useState(null);
  const { id } = match.params;

  React.useEffect(() => {
    getPaste(id)
      .then(paste => setPaste(paste))
      .catch(error => {
        console.error(error);
      });
  }, [id]); //returns id repeatedly

  //   if (!paste) {
  //     return <div>Not found</div>;
  //   }
  console.log(paste);
  return (
    <Section>
      {!paste && <div>Paste {id} Not found</div>}
      {paste && (
        <div>
          <Subtitle>{paste.title}</Subtitle>
          <Divider />
          <Content>{paste.text}</Content>
        </div>
      )}
    </Section>
  );
}

export default PasteDetails;
