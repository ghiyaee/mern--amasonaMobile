import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import Product from './screens/Product';
import { useContext } from 'react';
import { Store } from './Store';
import CartList from './component/CartList';
import SingUp from './component/SingUp';
import Register from './component/Register';

const App = () => {
  const {state}=useContext(Store)
  const { cart, image } = state
  return (
    <Router>
      <div dir="rtl">
        <header>
          <Link to="/"> Amasona Mobile</Link>
          <div className="titel_buy">
            <p>سبد خرید شما</p>
            {cart.cartItem.length > 0 ? (
              <div className=" buy">
                {cart.cartItem.reduce((a, c) => a + c.quantiy, 0)}{' '}
              </div>
            ) : (
              ''
            )}
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/product/:brand" element={<Product />} />
            <Route path="/cart" element={<CartList />} />
            <Route path="/sing" element={<SingUp />} />
            <Route path="/regi" element={<Register />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};
export default App;
