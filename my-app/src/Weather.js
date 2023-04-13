import React from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";

export default function Weather(props) {
  function showTemp(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp} degrees.`
    );
  }
  let apiKey = "bc2cd97eaa209e7d22d8f3c84081655f";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(url).then(showTemp);
  return <Puff color="#00BFFF" height={100} width={100} timeout={3000} />;
}
