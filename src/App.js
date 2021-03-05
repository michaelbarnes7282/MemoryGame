import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import "./App.css";
import { Burger } from "./components";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Burger open={open} setOpen={setOpen} />
      </div>
      <div
        className="App"
        style={{
          position: "fixed",
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        <header>
          <h3>Welcome to the Memory Game!</h3>
        </header>
        <div>{/* Grid */}</div>
      </div>
    </ThemeProvider>
  );
}

export default App;
