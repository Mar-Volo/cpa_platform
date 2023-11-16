// import { lazy } from "react";
// import { Route, Routes } from "react-router-dom";
import ParticlesBackground from "./components/Background/ParticlesBackground";
import { Header } from "./components/Header/Header";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <main></main>
      <GlobalStyle />
    </>
  );
}

export default App;
