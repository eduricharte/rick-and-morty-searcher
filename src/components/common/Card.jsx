import React from "react";
import "../../styles/Card.scss";
import Character from "./Character";

const Card = ({ characters }) => {
  return (
    <>
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </>
  );
};

export default Card;
