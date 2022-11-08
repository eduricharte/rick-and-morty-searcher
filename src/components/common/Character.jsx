import React from "react";
import "../../styles/Character.scss";

const Character = ({ character }) => {
  return (
    <>
      <div className="cardBody">
        <div className="image">
          {character.image?<img src={character.image} alt="Rick" />:''}
        </div>
        <div className="info">
          <div>
            <b>
              Name: <br />
              <span>{character.name}</span>
            </b>
          </div>
          <div>
            <b>
              Status: <br />
              <span>{character.status}</span>
            </b>
          </div>
          <div>
            <b>
              Specie:
              <br />
              <span>
                {character.species}
                {character.type ? `-${character.type}` : ""}
              </span>
            </b>
          </div>
          <div>
            <b>
              Gender:
              <br />
              <span>{character.gender}</span>
            </b>
          </div>
          <div>
            <b>
              Last known location:
              <br />
              <span>{character.location.name}</span>
            </b>
          </div>
        </div>
      </div>
    </>
  );
};

export default Character;
