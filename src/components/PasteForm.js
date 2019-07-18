import React from "react";
//import ButtonLink from "../components/ButtonLink";
import styled from "styled-components";
import { postPaste } from "../utils/pasteApi";
import { Redirect } from "react-router-dom";

const Form = styled.form``;

const Input = styled.input`
  width: 400px;
  padding: 12px 12px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #0099cc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 400px;
  padding: 12px 12px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #0099cc;
  border-radius: 4px;
  resize: none;
`;

function PasteForm() {
  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [paste, setPaste] = React.useState(null);

  function handleTitleChange(event) {
    console.log(event.target.value);
    event.preventDefault();
    setTitle(event.target.value);
  }
  function handleTextChange(event) {
    console.log(event.target.value);
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);

    const newPaste = {
      title, //title: title,
      text //text: text
    };

    postPaste(newPaste).then(paste => {
      setPaste(paste);
    });

    console.log(title, text);
  }

  function handleKeyDown(event) {
    //prevent form to submit from Enter
    if (event.keyCode === 13) {
      event.preventDefault();
      //console.log(event.keyCode);
    }
  }

  if (paste) {
    return <Redirect to={`/paste/${paste.id}`} />;
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Give it a title"
        value={title}
        onChange={handleTitleChange}
        required={true}
        onKeyDown={handleKeyDown}
      />
      <br />
      <Textarea
        rows={8}
        placeholder="Give your comment"
        value={text}
        onChange={handleTextChange}
        required
      />
      <br />
      {/* Button is disabled when the info is loading */}
      <button disabled={loading}>
        {loading ? "Loading ..." : "Create Paste"}
      </button>
    </Form>
  );
}

export default PasteForm;
