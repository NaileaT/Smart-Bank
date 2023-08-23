import React, {useEffect, useState} from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyled from "./GlobalStyled";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {
  const [tema, setTema] = useState(getInitialTheme)

  useEffect(() => {
    localStorage.setItem("tema", JSON.stringify(tema));
  }, [tema])

  function getInitialTheme() {
    const savedTheme = localStorage.getItem("tema");
    return savedTheme ? JSON.parse(savedTheme) : temaClaro
  }

  const toggleTema = () => {
    setTema((tema) => !tema)
  }

  return (
    <ThemeProvider theme={ tema ? temaClaro : temaOscuro}>
      <GlobalStyled/>
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
