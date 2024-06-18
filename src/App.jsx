import "./components/Home";
import Home from "./components/Home";
import "./styles/App.css";
import VideoPlayer from "./components/VideoPlayer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route path="/player" Component={VideoPlayer}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
