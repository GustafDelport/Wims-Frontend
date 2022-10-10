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
import SidebarComponent from "./Components/Layouts/Navigation/sidebar.component";
import HeaderComponent from "./Components/Layouts/Header/header.component";
import FooterComponent from "./Components/Layouts/Footer/footer.component";

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
//import "rsuite/src/styles/themes/default/index.less"



//Services
import DataService from "./Services/data.service";
import { Container } from "rsuite";

function App() {
  return (
      <Router>
        <Container>
          <SidebarComponent/>
            <Container>
              <HeaderComponent/>
                <Routes>
                  <Route path='/' element={DashboardComponent()}/>
                  <Route path='/login' element={LoginComponent()}/>
                  <Route path='/Product' element={ProductsComponent()}/>
                  <Route path='/Category' element={CategoriesComponent()}/>
                  <Route path='/Supplier' element={SuppliersComponent()}/>
                  <Route path='/CurrentOrders' element={CurrentOrdersComponent()}/>
                  <Route path='/PastOrders' element={PastOrdersComponent()}/>
                  <Route path='*' element={NotFoundComponent()}/>
                </Routes>
              <FooterComponent/>
            </Container>
        </Container>
      </Router>
  )
}

export default App;
