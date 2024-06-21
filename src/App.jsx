import "./components/Home";
import Home from "./components/Home";
import "./styles/App.css";
import VideoPlayer from "./components/VideoPlayer";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import { useState } from "react";
import Account from "./components/Account";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" Component={Home}></Route>
          <Route exact path="/" Component={Register}></Route>
          <Route exact path="/login" Component={Login}></Route>
          <Route exact path="/register" Component={Register}></Route>
          <Route path="/player" Component={VideoPlayer}></Route>
          <Route path="/editAccount" Component={Account}></Route>
          {/* <Route path="/" Component={Account}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
