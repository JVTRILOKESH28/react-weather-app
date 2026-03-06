import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"
import "./weatherapp.css"
import { useState } from "react";

export default function WeatherApp() {

const [weatherInfo, setWeatherInfo] = useState(null);

let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
};

return (
<div style={{ textAlign: "center" }}>
    <h1 >Weather App</h1>

    <SearchBox updateInfo={updateInfo} />

    {weatherInfo && <InfoBox info={weatherInfo} />}

</div>
);
}