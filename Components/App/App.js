import React, { useState } from "react";
import Search from "./../Search/Search";
import Result from "./../Result/Result";
import "./App.css";
const App = () => {
  const [choice, setChoice] = useState([]);
  const ChoiceData = (data) => {
    setChoice(data);
  };

  return (
    <section>
      <header>
        <h1> Movie Mania </h1>
        <Search choice={ChoiceData} />
      </header>
      <Result data={choice} />
    </section>
  );
};

export default App;
