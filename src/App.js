import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import BackgroundImage from "./components/BackgroundImage";
import Fullscreen from "./components/Fullscreen";
import MainLogo from "./components/MainLogo";
import Headline from "./components/Headline";

function App() {
  return (
    <>
      <GlobalStyle />
      <Fullscreen>
        <BackgroundImage src="https://cdn.pixabay.com/photo/2019/06/24/10/32/venice-4295681_1280.jpg" />
        <MainLogo />
        <Headline>Bella Venezia!</Headline>
      </Fullscreen>
    </>
  );
}

export default App;
