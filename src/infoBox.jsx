import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import './InfoBox.css';

export default function InfoBox({ info }) {

const HOT_URL = "https://images.unsplash.com/photo-1706314029987-e9063e177111?w=600";
const COLD_URL = "https://images.unsplash.com/photo-1763393434891-2a0c38d4e5a1?w=600";
const RAIN_URL = "https://images.unsplash.com/photo-1751957907164-c21ee17fa405?w=600";

return (

<div className="infobox">

<h2>Weather Information</h2>

<div className='card'>

<Card sx={{ maxWidth: 380 }}>

<CardMedia
sx={{ height: 220 }}
image={info.humidity > 80 ? RAIN_URL : (info.temp > 30) ? HOT_URL : COLD_URL}
/>

<CardContent>

<Typography gutterBottom variant="h5" component="div">
{info.city}
</Typography>

<Typography variant="body2" component="div">

<div className="weather-icon">
{info.humidity > 80 ? <ThunderstormIcon /> : (info.temp > 30) ? <SunnyIcon /> : <AcUnitIcon />}
</div>

<p><ThermostatIcon /> Temperature: {info.temp} °C</p>

<p><DeviceThermostatIcon /> Min Temperature: {info.tempMin} °C</p>

<p><DeviceThermostatIcon /> Max Temperature: {info.tempMax} °C</p>

<p><OpacityIcon /> Humidity: {info.humidity}%</p>

<p><WbSunnyIcon /> Feels Like: {info.feelslike} °C</p>

<p className="weather-row">
<span className="icon">☁</span>
<span>Description: {info.description}</span>
</p>

</Typography>

</CardContent>

</Card>

</div>

</div>

);
}