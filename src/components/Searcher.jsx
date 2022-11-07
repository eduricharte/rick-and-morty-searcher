import React from "react";
import Button from "./common/Button";
import '../styles/Searcher.scss'

const Searcher = () => {
  return (
    <div className="searcher">
      <input type="text" placeholder="Search Character Name" />
      <Button text={'Search'}/>
    </div>
  );
};

export default Searcher;
