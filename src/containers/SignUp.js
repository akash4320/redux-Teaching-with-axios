import React from "react";
import { connect } from "react-redux";

const signup = (props) => {
  return (
    <>
      <input
        type="text"
        placeholder="Username"
        value={props.username}
        onChange={(e) => props.changeUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="city"
        value={props.city}
        onChange={(e) => props.changeCity(e.target.value)}
      />
      <div>
        <select
          onChange={(e) => props.changeState(e.target.value)}
        >
          <option>Arunachal Pradesh</option>
          <option>Chattisghar</option>
          <option>Gujarat</option>
          <option>Karnataka</option>
          <option>Meghalaya</option>
          <option>Tripura</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Zipcode"
        value={props.zipcode}
        onChange={(e) => props.changeZipcode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={props.password}
        onChange={(e) => props.changePassword(e.target.value)}
      />
      <button onClick={() => props.submit(props.postData)}>Submit form</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    postData: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeUsername: (value) => dispatch({ type: "USERNAME", payload: value }),
    changeCity: (value) => dispatch({ type: "CITY", payload: value }),
    changeState: (value) => dispatch({ type: "STATE", payload: value }),
    changeZipcode: (value) => dispatch({ type: "ZIPCODE", payload: value }),
    changePassword: (value) => dispatch({ type: "PASSWORD", payload: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(signup);
