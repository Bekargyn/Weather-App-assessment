import "./styles/style.scss";
import Weather from "./components/weather";
import { FavCities } from "./components/fav_cities";

function App() {
  return (
    <div className="App">
      <Weather />
      <FavCities />
    </div>
  );
}

export default App;
