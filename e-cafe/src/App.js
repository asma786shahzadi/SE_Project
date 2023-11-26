import './App.css';
import { Switch , Route } from 'react-router-dom';
import Home from './Components/User/home';
import Login from './Components/login';
import Register from './Components/register';
import AdminHome from './Components/Admin/home';
import AddEmployee from './Components/Admin/addemployee';
import ViewEmployee from './Components/Admin/viewemployee';
import AddProduct from './Components/Admin/addproduct';
import ViewProduct from './Components/Admin/viewproduct';
import Products from './Components/User/products';
import ProductDetails from './Components/User/productdetails';
import Cart from './Components/User/cart';
import Success from './Components/success';
import Cancel from './Components/cancel';
import Support from './Components/User/support';
import Error from './Components/404';
import PrivateRouteAdmin from './Components/privaterouteradmin';
import PrivateRouteUser from './Components/privaterouteuser';
import Order from './Components/User/order';
import AdminSupport from './Components/Admin/adminsupport';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <PrivateRouteAdmin exact path="/adminhome" component={AdminHome}/>
        <PrivateRouteAdmin exact path="/addemployee" component={AddEmployee}/>
        <PrivateRouteAdmin exact path="/viewemployee" component={ViewEmployee}/>
        <PrivateRouteAdmin exact path="/addproduct" component={AddProduct}/>
        <PrivateRouteAdmin exact path="/viewproduct" component={ViewProduct}/>
        <PrivateRouteAdmin exact path="/adminsupport" component={AdminSupport}/>
        <Route exact path="/products" component={Products}/>
        <Route exact path="/productdetails/:id" component={ProductDetails}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/success" component={Success}/>
        <Route exact path="/cancel" component={Cancel}/>
        <Route exact path ="/support" component={Support}/>
        <Route exact path="/404" component={Error}/>
        <Route exact path="/myorders" component={Order}/>
      </Switch>
    </div>
  );
}

export default App;