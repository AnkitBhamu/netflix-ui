import "./components/Home";
import Home from "./components/Home";
import "./styles/App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import { useState } from "react";
import Account from "./components/Account";
import MyList from "./components/MyList";
import Player from "./components/Player";
import ContentSelected from "./components/ContentSelected";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/home"
            Component={() => (
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            )}
          ></Route>

          <Route
            exact
            path="/mylist"
            Component={() => (
              <ProtectedRoute>
                <MyList />
              </ProtectedRoute>
            )}
          ></Route>

          <Route exact path="/" Component={Register}></Route>
          <Route exact path="/login" Component={Login}></Route>
          <Route exact path="/register" Component={Register}></Route>

          <Route
            path="/player"
            Component={() => (
              <ProtectedRoute>
                <Player />
              </ProtectedRoute>
            )}
          ></Route>

          <Route
            path="/editAccount"
            Component={() => (
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            )}
          ></Route>

          <Route
            path="/selected"
            Component={() => (
              <ProtectedRoute>
                <ContentSelected />
              </ProtectedRoute>
            )}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
