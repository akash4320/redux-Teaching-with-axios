import React, { Component } from "react";
import SignUp from './SignUp';
import axios from "../axios";

class Layout extends Component {
    submit = (postData) => {
      console.log("post data", postData);
        //   axios.get(`https://reqres.in/api/users?page=2`)
      axios.post("/list.json", postData)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    };

  render() {
    return (
        <SignUp submit={this.submit} />
    );
  }
}

export default Layout;
