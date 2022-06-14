import React from "react";

// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}

const Wather = (props) => {
  return (
    <div className="container d-flex justify-content-center">
      <div></div>
      <div className="cards text-center">
        <h1> {props.city}</h1>

        <h5 className="py-4 display-5">
          <i className={`wi ${props.WatherIcon} display-1`}></i>
        </h5>
        <h1 className="py-2">
          <br />
          {"   "}
          {props.celsius ? <h1>{props.celsius}&deg;</h1> : null}
        </h1>
        {Maxmin(props.temp_max, props.temp_min)}
        <h4 className="py-4">{props.description}</h4>
      </div>
    </div>
  );
};
const Maxmin = (max, min) => {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
};

export default Wather;
