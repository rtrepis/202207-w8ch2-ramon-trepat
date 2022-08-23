import React, { useEffect, useState } from "react";
import "./App.css";

interface ArrayStarship {
  name: string;
  starship_class: string;
}

interface initialStarship {
  count: number;
  starship_class: string[];
}

const App = () => {
  const initialStarship: initialStarship = {
    count: 0,
    starship_class: [],
  };

  const [starship, setStarship] = useState(initialStarship);

  const apiRequest = async () => {
    let response = await fetch("https://swapi.dev/api/starships/");
    let data = await response.json();

    const { count } = await data;
    const arrayStarship = await data.results;

    let starship_class: string[] = [];
    arrayStarship.forEach((element: ArrayStarship) => {
      starship_class.push(element.starship_class);
    });

    setStarship({
      ...starship,
      count: count,
      starship_class: { ...starship_class },
    });

    console.log(starship);
  };

  useEffect(() => {
    apiRequest();
  }, []);

  return (
    <div id="background-container">
      <header id="header-title">Star Wars Test</header>
      <main id="main-container">
        <h2>Starships:</h2>
        <p id="total-ships">Total ships:{starship.count} </p>
        <h2>Starships by class:</h2>
      </main>
    </div>
  );
};

export default App;
