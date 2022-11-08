import portal from "./assets/portal.png";
import "./App.scss";
import Searcher from "./components/Searcher";
import Select from "./components/common/Select";
import Card from "./components/common/Card";
import { useEffect, useState } from "react";
import Pagination from "./components/common/Pagination";
import "./styles/Pagination.scss";
import "./styles/Button.scss";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [locations, setLocations] = useState([]);
  const [fetchedDataInfo, setFetchedDataInfo] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isCharacterEnabled, setIsCharacterEnabled] = useState(true);
  const [isEpisodeEnabled, setIsEpisodeEnabled] = useState(false);
  const [isLocationEnabled, setIsLocationEnabled] = useState(false);

  const [text, setText] = useState("");

  const URL = `https://rickandmortyapi.com/api/`;

  useEffect(() => {
    const fetchCharacters = async () => {
      let data = await fetch(
        `${URL}character/?page=${pageNumber}&name=${text}`
      ).then((res) => res.json());
      setCharacters(data.results);
    };
    const fetchEpisodes = async () => {
      let data = await fetch(
        `${URL}episode/?page=${pageNumber}&name=${text}`
      ).then((res) => res.json());
      setEpisodes(data.results);
    };
    const fetchLocations = async () => {
      let data = await fetch(
        `${URL}location/?page=${pageNumber}&name=${text}`
      ).then((res) => res.json());
      setLocations(data.results);
    };

    const fetchData = async () => {
      let data = await fetch(`${URL}character`).then((res) => res.json());
      setFetchedDataInfo(data.info);
    };

    fetchCharacters();
    fetchEpisodes();
    fetchLocations();
    fetchData();
  }, [URL, pageNumber, text]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={portal} className="App-logo" alt="logo" />
        <h1>Rick and Morty Character Searcher</h1>
      </header>
      <div className="body">
        <div className="filter">
          <button
            onClick={async () => {
              let data = await fetch(`${URL}character`).then((res) =>
                res.json()
              );
              setFetchedDataInfo(data.info);
              setIsCharacterEnabled(true);
              setIsEpisodeEnabled(false);
              setIsLocationEnabled(false);
            }}
          >
            Character
          </button>
          <button
            onClick={async () => {
              let data = await fetch(`${URL}episode`).then((res) => res.json());
              setFetchedDataInfo(data.info);

              setIsCharacterEnabled(false);
              setIsEpisodeEnabled(true);
              setIsLocationEnabled(false);
            }}
          >
            Episodes
          </button>
          <button
            onClick={async () => {
              let data = await fetch(`${URL}location`).then((res) =>
                res.json()
              );
              setFetchedDataInfo(data.info);
              setIsCharacterEnabled(false);
              setIsEpisodeEnabled(false);
              setIsLocationEnabled(true);
            }}
          >
            Locations
          </button>
        </div>
        <div className="searcher">
          <Searcher
            isCharacterEnabled={isCharacterEnabled}
            setPageNumber={setPageNumber}
            setText={setText}
          />
          <Select
            isEnabled={isEpisodeEnabled}
            type={"episode"}
            info={fetchedDataInfo}
            array={episodes}
            setText={setText}
            />
          <Select
            isEnabled={isLocationEnabled}
            type={"location"}
            info={fetchedDataInfo}
            setText={setText}
            array={locations}
          />
        </div>
        <div className="cards">
          <Card characters={characters} />
        </div>
        <div className="paginationNav">
          <Pagination
            info={fetchedDataInfo}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
