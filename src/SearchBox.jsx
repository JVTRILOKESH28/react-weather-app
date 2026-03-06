import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {

let [City, setCity] = useState("");
let [error, setError] = useState(false);

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "f245e7ae8209a74c7da66fb7ae564bc4";

let fetchWeather = async () => {

let response = await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
let jsonresponse = await response.json();

if (jsonresponse.cod !== 200) {
    throw new Error("City not found");
}

let weather = {
    city: jsonresponse.name,
    temp: jsonresponse.main.temp,
    tempMin: jsonresponse.main.temp_min,
    tempMax: jsonresponse.main.temp_max,
    humidity: jsonresponse.main.humidity,
    feelslike: jsonresponse.main.feels_like,
    description: jsonresponse.weather[0].description
};

return weather;
};

let handlechange = (event) => {
setCity(event.target.value);
};

let handlesubmit = async (event) => {
event.preventDefault();

try {

let weatherInfo = await fetchWeather();
updateInfo(weatherInfo);

setCity("");
setError(false);

} catch (err) {

setError(true);

}
};

return (
<div className='searchbox'>

<h3 >Search for the weather</h3>

<form onSubmit={handlesubmit}>

<TextField
id="City"
label="City Name"
variant="outlined"
required
value={City}
onChange={handlechange}
/>

<br />
<br />

<Button variant="contained" type="submit">
Send
</Button>

</form>

{error && <p style={{ color: "red" }}>City not found</p>}

</div>
);
}