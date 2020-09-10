import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Home, About, User } from "./pages";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/User">User</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/User/:name" component={User} />
      </div>
    </Router>
  );
}

export default App;
