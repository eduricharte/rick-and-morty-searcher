import React, { useState } from "react";
import Button from "./common/Button";
import "../styles/Searcher.scss";
import Select from "./common/Select";

const Searcher = ({ locations, episodes }) => {
  const [text, setText] = useState("");

  const handleInputChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (e) => {
    e.prevetDefault();
    console.log(text);
  };

  return (
    <div className="searcher">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Character Name"
          onChange={handleInputChange}
        />
        <Select array={locations} type={"location"} />
        <Select array={episodes} type={"episode"} />
        <Button text={"Search"} type={"Submit"} />
      </form>
    </div>
  );
};

export default Searcher;
