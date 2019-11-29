import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import PostList from "./components/PostList";

import "./App.css";

const store = createStore(reducers, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <div className="App">
      <div className="title">Blog</div>
      <PostList />
    </div>
  </Provider>
);

export default App;
