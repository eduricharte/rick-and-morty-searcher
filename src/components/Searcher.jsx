import React from "react";
import "../styles/Searcher.scss";
import "../styles/Button.scss";

const Searcher = ({ isCharacterEnabled, setText, setPageNumber }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search Character Name"
        disabled={!isCharacterEnabled}
        onChange={({ target }) => {
          setPageNumber(1);
          setText(target.value);
        }}
      />
    </>
  );
};

export default Searcher;
