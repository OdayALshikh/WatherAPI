import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "weather-icons/css/weather-icons.css";
import Wather from "./componentwather/Wather";
import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./componentwather/Form";

function App() {
  const Api_key = "0f36b78fd199ee3c1136a7a87a45f5f9";
  // https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
  const [state, setstate] = useState({
    city: undefined,
    country: undefined,

    main: undefined,
    celsius: undefined,
    temp_max: undefined,
    temp_min: undefined,
    description: undefined,
    erorr: false,
    icon: "",
    lang: undefined,
  });
  const Calcels = (temp) => {
    const cal = Math.floor(temp - 273.1);
    return cal;
  };
  const WatherIcon = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-day-rain",
    Snow: "wi-day-sprinkle",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog",
    Atmosphere: "wi-fog",
  };
  const get_whathericon = async (icons, rangid) => {
    switch (true) {
      case rangid >= 200 && rangid <= 232:
        setstate({ icon: WatherIcon.Thunderstorm });
        break;
      case rangid >= 300 && rangid <= 321:
        setstate({ icon: WatherIcon.Drizzle });
        break;
      case rangid >= 500 && rangid <= 531:
        setstate({ icon: WatherIcon.Rain });
        break;
      case rangid >= 600 && rangid <= 622:
        setstate({ icon: WatherIcon.Snow });
        break;
      case rangid >= 701 && rangid <= 783:
        setstate({ icon: WatherIcon.Atmosphere });
        break;
      case rangid === 800:
        setstate({ icon: WatherIcon.Clear });
        break;
      case rangid >= 801 && rangid <= 804:
        setstate({ icon: WatherIcon.Clouds });
        break;

      default:
        setstate({ icon: WatherIcon.Clouds });
        break;
    }
  };

  const getwather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    // const country = e.target.elements.country.value;
    if (city && country) {
      var rem = await axios
        .get(
          `  https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_key}&lang=ar
          `
        )
        .then((res) => {
          console.log("respos", res.data);

          setstate({
            celsius: Calcels(res.data.main.temp),
            city: `${res.data.name}, ${res.data.sys.country}`,
            temp_max: Calcels(res.data.main.temp_max),
            temp_min: Calcels(res.data.main.temp_min),
            description: res.data.weather[0].description,
          });

          console.log("city", res.data.name);
          console.log("max", res.data.main.temp_max);
        })

        .catch((erorr) => {
          console.log(erorr);
        });
    } else {
      setstate({ erorr: true });
    }
  };

  return (
    <div className="App">
      <Form loadWather={getwather} erorr={state.erorr} />
      <Wather
        loadWather={getwather}
        celsius={state.celsius}
        city={state.city}
        temp_max={state.temp_max}
        temp_min={state.temp_min}
        description={state.description}
        WatherIcon={state.icon}
      />
    </div>
  );
}

export default App;
