import portal from "./assets/portal.png";
import "./App.scss";
import Searcher from "./components/Searcher";
import Card from "./components/common/Card";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocation] = useState([]);
  const [episodes, setEpisode] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      console.info("characters", data.results);
      setCharacters(data.results);
    };

    const fetchLocations = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/location");
      const data = await res.json();
      console.info("locations", data.results);
      setLocation(data.results);
    };

    const fetchEpisodes = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/episode");
      const data = await res.json();
      console.info("episodes", data.results);
      setEpisode(data.results);
    };

    fetchCharacters();
    fetchLocations();
    fetchEpisodes();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={portal} className="App-logo" alt="logo" />
      </header>
      <div className="body">
        <Searcher locations={locations} episodes={episodes} />
        <div className="cards">
          <Card characters={characters} />
        </div>
      </div>
    </div>
  );
}

export default App;
