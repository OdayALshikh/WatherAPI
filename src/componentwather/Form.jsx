import React from "react";
import "./form.style.css";
const Form = (props) => {
  return (
    <div className="container   justify-content-around ">
      <div>{props.erorr ? erorr1() : null}</div>

      <form onSubmit={props.loadWather}>
        <div className="row my-4">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              name="city"
              autoComplete="off"
              placeholder="city"
            ></input>
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              name="country"
              placeholder="country"
              autoComplete="off"
            ></input>
          </div>
          <div className="col-md-3 ">
            <button type="submit" className="btn  btn-warning ">
              GET-WAATHERR
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
const erorr1 = () => {
  return (
    <div class="alert alert-danger mx-5" role="alert">
      Please Insert country and city ;
    </div>
  );
};

export default Form;
