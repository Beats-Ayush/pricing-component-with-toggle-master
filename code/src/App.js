import React from "react";
import CardContainer from "./components/card-container/CardContainer";
import Header from "./components/header/Header";
import "./../src/css/main.css";

const App = (props) => {
  return (
    <main className="container">
      <h1 className="sr-only">FrontEnd challenge</h1>
      <div className="card-container">
        <Header />
        <CardContainer />
      </div>
      <footer className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/Beats-Ayush/pricing-component-with-toggle-master">
          Beats-Ayush
        </a>
        .
      </footer>
    </main>
  );
};

export default App;
