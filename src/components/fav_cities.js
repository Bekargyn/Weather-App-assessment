const listOfCities = [
  "Chicago",
  "Miami",
  "Houston",
  "New-York",
  "San-Francisco",
  "Rio-De-Janeiro",
  "Austin",
  "Paris",
  "Moskow",
  "London",
  "Amsterdam",
  "Tokio",
  "Sydney",
  "Beijing",
];

listOfCities.sort();

const renderFavCity = listOfCities.map((city) => {
  return <option key={city}>{city}</option>;
});

export const FavCities = () => {
  return (
    <div className="fav-cities">
      <p>Favorite cities</p>
      <select>{renderFavCity}</select>
    </div>
  );
};
