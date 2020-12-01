import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginPage from "./views/pages/LoginPage";
import Layouts from "./layout/Layouts";

function App() {
  return (
      <Router>
        {/*<ul>*/}
        {/*  <li>*/}
        {/*    <Link to="/home">Home</Link>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <Link to="/login">Login</Link>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <a href="/about">About</a>*/}
        {/*  </li>*/}
        {/*</ul>*/}
        <Switch>
          <Route path="/login">
              <LoginPage/>
          </Route>
          <Route path="/page404">Page not found</Route>
          <Route path="/">
              <Layouts/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;