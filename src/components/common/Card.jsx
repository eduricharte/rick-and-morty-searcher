import React from "react";
import "../../styles/Card.scss";
import Character from "./Character";

const Card = ({ characters }) => {
  let cards =
    characters !== undefined
      ? characters.map((character) => (
          <Character key={character.id} character={character} />
        ))
      : "No characters found.";
  return <>{cards}</>;
};

export default Card;
