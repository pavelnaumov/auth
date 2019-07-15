import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/reducers";
import firebase from "firebase";
import LoginForm from "./src/components/LoginForm";
import ReduxThunk from "redux-thunk";
import Router from "./src/Router";

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBqBjDxwEiq-AsccnvcFr6FvjQjCpegHBI",
      authDomain: "rn-managerapp-78162.firebaseapp.com",
      databaseURL: "https://rn-managerapp-78162.firebaseio.com",
      projectId: "rn-managerapp-78162",
      storageBucket: "",
      messagingSenderId: "829072618131",
      appId: "1:829072618131:web:802d04f46c20c77e"
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
