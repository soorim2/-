import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Main from './router/Main';
import NotProduct from './router/NotProduct';
import Products from './router/Products';
import ProductDetail from './router/ProductDetail';


const App = () => {
  return (
    <Router>      
    <div>   
      <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/products">Products</Link></li>
        </ul> 
        <hr/>
        <Switch>
          <Route path="/" exact> <Main /> </Route>
          <Route path="/products" exact > <Products /> </Route>       
          <Route path="/products/:productID"  exact> <ProductDetail /> </Route>  
               {/* path가 겹치는 경우 exact 작성  */}
          <Route path="*" > <NotProduct /> </Route>
        </Switch>
    </div>
    </Router>
  );
};

export default App;