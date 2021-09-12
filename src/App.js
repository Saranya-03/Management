import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./Pages/Home/home";
import "./app.css";
import Topbar from "./Components/Topbar/topbar";
import SalesPerson from "./Pages/SalesPerson/salesPerson";
const { default: Sidebar} = require("./Components/Sidebar/sidebar");


function App() {
  return (
    <div className="App"> 
      <Topbar />
      <div className="container">
        <Sidebar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/SalesPerson">
              <SalesPerson />
            </Route>
          </Switch>  
        </BrowserRouter>
              
      </div>
    </div>
      
  );
}

export default App;
