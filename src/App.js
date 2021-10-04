import React, { useState } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const PokeData = pokemons;

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      {
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      }
      <div className="cards">
        {PokeData.filter((Pokedata) => {
          if (setName === "") {
            return Pokedata;
          } else if (
            Pokedata.name
              .toLowerCase()
              .trim()
              .includes(name.toLowerCase().trim())
          ) {
            return PokeData;
          }
        }).map((PokeData) => (
          <CardItem {...PokeData} />
        ))}
      </div>
    </div>
  );
}
