import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "./Components/Products/Product";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import fakeData from "./fakedata";
function App() {
  const [product, setProduct] = useState(fakeData);
  const [cart, setCart] = useState([]);

  const handleAddProductToCart = (key) => {
    const addToCart = product.find((ed) => ed.id === key);
    const isItOldObject = cart.find((ct) => ct.id === key);
    if (isItOldObject) {
      let unitPrice = isItOldObject.price / isItOldObject.quantity;
      const Quantity = (isItOldObject.quantity += 1);
      isItOldObject.price = unitPrice * Quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, addToCart]);
    }
  };

  const handleIncreaseBtn = (key) => {
    const increase = cart.find((inc) => inc.id === key);
    const unitPrice = increase.price / increase.quantity;
    const Quantity = (increase.quantity += 1);
    increase.price = unitPrice * Quantity;
    setCart([...cart]);
  };

  const handleDecreaseBtn = (key) => {
    const decrease = cart.find((inc) => inc.id === key);
    const increaseCart = decrease.price / decrease.quantity;
    const itemAdded = (decrease.quantity -= 1);
    decrease.price = increaseCart * itemAdded;
    setCart([...cart]);
  };
  const handleRemoveBtn = (key) => {
    const itemRemoved = cart.filter((rd) => rd.id !== key);
    setCart(itemRemoved);
  };
  const totalOrder = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/product">Product</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/product">
              {product.map((pd) => (
                <Product
                  products={pd}
                  handleAddProductToCart={handleAddProductToCart}
                />
              ))}
            </Route>
            <Route path="/cart">
              {cart.map((td) => (
                <Cart
                  td={td}
                  handleIncreaseBtn={handleIncreaseBtn}
                  handleDecreaseBtn={handleDecreaseBtn}
                  handleRemoveBtn={handleRemoveBtn}
                ></Cart>
              ))}
              <h2>Total:{totalOrder} </h2>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
