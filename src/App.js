import React, { Component } from "react";
import { Provider } from "react-redux";
import './App.css'

import store from "./store";
import Home from "./Home";

export default () =>
<div className='App'>
  <Provider store={store}>
    <Home />
  </Provider>;
  </div>
