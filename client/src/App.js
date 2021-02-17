// This imports the styling into our 'main' page
import './App.css';
import Nav from './Components/Nav';
import { Route, BrowserRouter as Router, Switch, } from "react-router-dom";
import Home from "./Components/Home"
import 'bootstrap/dist/css/bootstrap.min.css';

//lets us export as a render page to index.js
function App() {

  // This is where the routing takes place
  return (
    <Router>
      <div className="App">
       <Nav/>
        <Switch>
          <Route path="/" exact component={Home} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
