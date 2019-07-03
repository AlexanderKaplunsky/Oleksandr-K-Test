import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import FirstTask from "./Components/FirstTask";
import SecondTask from "./Components/SecondTask";
import ThirdTask from "./Components/ThirdTask";
import FourthTask from "./Components/FourthTask";
import FifthTask from "./Components/FifthTask";
import _FifthTask from "./Components/_FIfthTask";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <FirstTask />
        <SecondTask />
        <ThirdTask />
        <ForthTask /> */}
        <ul className="links">
          <li>
            <Link to="/first-task">First Task</Link>
          </li>
          <li>
            <Link to="/second-task">SecondTask</Link>
          </li>
          <li>
            <Link to="/third-task">Third Task</Link>
          </li>
          <li>
            <Link to="/fourth-task">Fourth Task</Link>
          </li>
          <li>
            <Link to="/-fifth-task">Fifth Task</Link>
          </li>
          <li>
            <Link to="/fifth-task">My version of Fifth Task</Link>
          </li>
        </ul>
        <p style={{ fontSize: "10px", textAlign: "left" }}>
          *Inspired by Google Search, SO and Medium
        </p>
        <Switch>
          <Route path="/first-task" component={FirstTask} />
          <Route path="/second-task" component={SecondTask} />
          <Route path="/third-task" component={ThirdTask} />
          <Route path="/fourth-task" component={FourthTask} />
          <Route path="/fifth-task" component={FifthTask} />
          <Route path="/-fifth-task" component={_FifthTask} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
