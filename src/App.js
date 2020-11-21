import "./App.css";
import React from "react";
import{BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./view/Home";
import Item from "./view/Item";
import Detail from "./view/Detail";

function App() {
  
  return (
    <Router>
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/Item" className="nav-link">List Object</Link>
      {/* <Link to="/Detail" className="nav-link">Detail Object</Link> */}
      </nav>
        

    <Switch>
       <Route path="/Detail">
         <Detail/>
       </Route>
       <Route path="/Item">
         <Item/>
       </Route>
       <Route path="/">
         <Home/>
       </Route>
    </Switch>

    </div>
    </Router>
    
  );
}

export default App;
