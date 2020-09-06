import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { api } from "./service/api";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ListaConfrontosHoje } from './components/ListaConfrontosHoje';
import Time from  "./components/Time";

import "./global.css";

function App() {
  const [times, setTimes] = useState([]);
  const [loadingTable, setLoadingTable] = useState(false);
  const [loadingResults, setLoadingResults] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get('/tabela');

      setTimes(data);
      setLoadingTable(true);
    };
    fetchData();
  }, []);

  const enableLoadingResults = () => setLoadingResults(true)

  return (
    <>
      {
        !loadingTable && !loadingResults ? (
          <div className="loading">
            <BeatLoader
              size={20}
              color={"#fff"}
            />
          </div>
        ) : (
          <div className="grid">
            <Header />
            <ListaConfrontosHoje enableLoadingResults={enableLoadingResults} />
            <div className="container">
              { times.map((time, index) => <Time key={index} {...time} />) }
            </div>
            <Footer />
          </div>
        )
      }
    </>
  )
}

export default App;
