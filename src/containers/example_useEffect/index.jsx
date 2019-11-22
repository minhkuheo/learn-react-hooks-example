import React, { useState, useEffect } from "react";
import axios from "axios";

const ExampleUseEffect = () => {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");

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

  const onChange = event => setQuery(event.target.value);

  console.log("[data] ", data);

  return (
    <>
      <h3>This is example of "fetch data" using useEffect</h3>
      <input value={query} onChange={onChange} />
      <ul>
        {data &&
          data.hits.map((hitItem, idx) => {
            const { title, url } = hitItem;
            if (idx < 5 && !!hitItem.title) {
              return (
                <li key={idx}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {title}
                  </a>
                </li>
              );
            }

            return null;
          })}
      </ul>
    </>
  );
};

export default ExampleUseEffect;

// function FetchDataWithoutSubmition({ query, onChange }) {
//   return <input value={query} onChange={onChange} />;
// }
