import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles.css";

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
