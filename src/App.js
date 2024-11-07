import React, { useState, Suspense } from "react";
import "./App.css";
import Table from "./Table";
import Loading from "./Loading";

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);

  // useEffect(()=>{
  //  searchPressed();
  // },[])

  const searchPressed = async () => {
    await fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=15ca787f2d191cf1f09525804a2ce85d&q=kakinada`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result.list, '....')
        setWeather(result.list);
      });
  };

  return (
    <div style={{ display: 'flex' }}>
      <header>
      <h3 style={{ color: 'orange' }}>Weather in your city</h3>
        <div >
          <input
            type="text"
            name='search'
            placeholder="Enter city/town..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div> <br /><br />

        {weather && weather.length > 0 &&
          <Suspense fallback={<Loading />}>
            <Table key={weather.id} weather={weather} /> 
          </Suspense>
         }

      </header>
    </div>
  );
}

export default App;
