import React, { useState, useEffect } from "react";
import axios from "axios";

const ExampleUseEffect = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("react");

  useEffect(() => {
    let ignores = false;

    async function fetchData() {
      const response = await axios(
        "https://hn.algolia.com/api/v1/search?query=" + query
      );
      if (!ignores) {
        setData(response.data);
      }
    }

    fetchData();

    return () => {
      ignores = true;
    };
  }, [query]);

  return (
    <>
      <h3>This is example of "fetch data" using useEffect</h3>
      <input value={query} onChange={event => setQuery(event.target.value)} />
      <ul>
        {data[0] &&
          data.map((hitItem, idx) => {
            if (idx <= 5) {
              return (
                <li key={hitItem.ObjectId}>
                  <a href={hitItem.url}>{hitItem.title}</a>
                </li>
              );
            }
          })}
      </ul>
    </>
  );
};

export default ExampleUseEffect;
