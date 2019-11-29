import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";

import "./App.css";

function App() {
  return (
    <Provider store={createStore(reducers)}>
      <div className="App">Ohai!</div>
    </Provider>
  );
}

export default App;
