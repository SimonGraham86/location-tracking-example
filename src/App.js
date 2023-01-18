import './App.css';
import timezoneCityToCountry from './timezoneCityToCountry.json';

function App() {
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const tzArr = userTimezone.split("/");
  const userRegion = tzArr[0];
  const userCity = tzArr[tzArr.length - 1];
  const userCountry = timezoneCityToCountry[userCity];

  console.log("Timezone: ", userTimezone);
  console.log("Region: ", userRegion);
  console.log("Country: ", userCountry);
  console.log("City: ", userCity);

  return (
    <div className="App">
      <div className="container">
        Timezone: {userTimezone} <br/>
        Region: {userRegion} <br/>
        Country: {userCountry} <br/>
        City: {userCity} 
      </div>
    </div>
  );
}

export default App;
