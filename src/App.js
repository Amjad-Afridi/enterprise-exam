import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [searchedItems, setSearchedItems] = useState([]);
  const [itemsData, setData] = useState([]);
  return (
    <>
      <h1>My hacker stories</h1>
      <div>
        Search :{" "}
        <input
          type="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => {
            setSearchedItems([...searchedItems, search]);

            return fetch(
              `https://hn.algolia.com/api/v1/search?query=${search}&page=0`
            )
              .then((response) => response.json())
              .then((data) =>
                setData(
                  data.hits.map((item, index) => {
                    <br />;
                    return data.hits[index].title;
                  })
                )
              );
          }}
        >
          submit
        </button>
        <div>
          <span style={{ backgroundColor: "blue", color: "white" }}>
            {searchedItems}
          </span>
        </div>
      </div>
      <hr />
      <div>{itemsData}</div>
    </>
  );
}

export default App;
