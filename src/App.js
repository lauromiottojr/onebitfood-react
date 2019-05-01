import React from 'react';
import "./App.scss";
import { Container, Section } from 'rbx';
import Header from "./components/header";
import Home from "./screens/home";

const App = () => (
  <div>
    <Header />
    <Home />
    <Section>
      <Container>
      </Container>
    </Section>
  </div>
)

export default App;