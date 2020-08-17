import React, { useState, useEffect } from "react";
import { api } from "./service/api";

import Header from "./components/Header";
import Time from "./components/Time";

import "./global.css";

function App() {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get();

      setTimes(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {times.map(
          (
            { position, name, points, defeats, victories, imagePath },
            index
          ) => (
            <Time
              key={index}
              name={name}
              position={position}
              points={points}
              defeats={defeats}
              victories={victories}
              imagePath={imagePath}
            />
          )
        )}
      </div>
    </>
  );
}

export default App;
