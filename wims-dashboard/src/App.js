import {Component} from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Components
import DashboardComponent from "./components/pages/dashboard.component";
import NotFoundComponent from "./Pages/NotFound";

// Styles
import './App.css';
import 'rsuite/lib/styles/themes/default/index.less';
import { Switch, Route, BrowserRouter } from "react-router-dom";

//Services
import DataService from "./Services/";
import {Alert} from "rsuite";

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
        <BrowserRouter>
          <Switch>
            <Route exact path={["/", "/home", "/dashboard"]} component={DashboardComponent}/>
            <Route component={NotFoundComponent}/>
          </Switch>
        </BrowserRouter>
      )
    }
}

export default App;
