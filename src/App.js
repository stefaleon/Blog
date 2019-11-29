import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";
import PostList from "./components/PostList";

import "./App.css";

function App() {
  return (
    <Provider store={createStore(reducers)}>
      <div className="App">
        <div className="title">Blog</div>
        <PostList />
      </div>
    </Provider>
  );
}

export default App;
