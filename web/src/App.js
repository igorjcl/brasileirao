import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import { api } from "./service/api";

import Header from "./components/Header";
import Time from "./components/Time";

import "./global.css";

function App() {
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get();

      setTimes(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {loading ? (
          <BeatLoader
            size={15}
            color={"#81b910"}
            css={css`
              margin-top: 50%;
            `}
          />
        ) : (
          times.map(
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
          )
        )}
      </div>
    </>
  );
}

export default App;
