import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";

import PrivateRoute from "./components/PrivateRoute";

import "./styles/global.css";
import Habits from "./pages/Habits";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <PrivateRoute path="/app" component={Home} exact />
        <PrivateRoute path="/habits" component={Habits} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
