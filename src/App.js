import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState([]);
  const img = useRef();

  useEffect(() => {
    let interval,
      i = 0;
    interval = setInterval(() => {
      if (i < 5) {
        setUrl((prev) =>([...prev, 'https://coffee.alexflipnote.dev/random']));
        i++;
      } else {
        clearInterval(interval);
      }

    }, 1000);
    return () => clearInterval(interval);
  }, []);

  console.log(url);

  return (
    <>
      {
        url.map((item, i) => {
          return (
            <div className="App">
              <img src={item} ref={img} />
            </div>
          );
        })}
    </>
  );
}

export default App;
