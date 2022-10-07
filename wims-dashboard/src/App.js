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

//Inventory Components
import ProductsComponent from "./Components/Pages/Inventory/Product/Products.component";
import CategoriesComponent from "./Components/Pages/Inventory/Categories/Categories.component";

//Suppliers
import SuppliersComponent from "./Components/Pages/Suppliers/Suppliers.component";

//Orders Components
import CurrentOrdersComponent from "./Components/Pages/Orders/CurrentOrders/Current.Orders.component";
import PastOrdersComponent from "./Components/Pages/Orders/PastOrders/Past.Orders.component";

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
              <Route path='/Product' element={<ProductsComponent/>}/>
              <Route path='/Category' element={<CategoriesComponent/>}/>
              <Route path='/Supplier' element={<SuppliersComponent/>}/>
              <Route path='/CurrentOrders' element={<CurrentOrdersComponent/>}/>
              <Route path='/PastOrders' element={<PastOrdersComponent/>}/>
              <Route path='*' element={<NotFoundComponent/>}/>
            </Routes>
          </Router>
      )
    }
}

export default App;
