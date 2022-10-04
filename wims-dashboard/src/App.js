import {Component} from "react";
import { 
  BrowserRouter as Router, 
  Route,
  Routes,
} from "react-router-dom";

// Components
import DashboardComponent from "./Components/Pages/Dashboard/dashboard.component";
import LoginComponent from "./Components/Pages/Login/login.component";
import NotFoundComponent from "./Components/Pages/NotFound/notfound.component";

import InventoryComponent from "./Components/Pages/Inventory/invetory.component"

// Styles
import './App.css';
import 'rsuite/dist/rsuite.min.css';


//Services
import DataService from "./Services/data.service";

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
          data: undefined
        }
    }

    async componentDidMount(){
      
    }

    //all routes come here
    render() {
      return (
          <Router>
            <Routes>
              <Route path='/' element={<DashboardComponent/>}/>
              <Route path='/login' element={<LoginComponent/>}/>
              <Route path='/inventory' element={<InventoryComponent/>}/>
              <Route path='*' element={<NotFoundComponent/>}/>
            </Routes>
          </Router>
      )
    }
}

export default App;
