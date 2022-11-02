import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [backEndData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <div className="App">
      {typeof backEndData.message === "undefined" ? (
        <p>Loading ...</p>
      ) : (
        <h1>backEndData.message</h1>
      )}
    </div>
  );
}

export default App;
