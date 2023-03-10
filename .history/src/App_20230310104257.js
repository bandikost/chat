import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { ChatContext } from "./context/ChatContext";
import Home from "./components/Home";
import Login from "./components/Login";
import { auth } from "./firebase";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [data, setData] = useState({});

  auth.onAuthStateChanged((user) => {
    setCurrentUser(user);
  });

  return (
    <Router>
      <Switch>
        <AuthContext.Provider value={{ currentUser }}>
          <ChatContext.Provider value={{ data, setData, currentUser }}>
            <Route exact path="/">
              <Home />
            </Route>
          </ChatContext.Provider>
        </AuthContext.Provider>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
