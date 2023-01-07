import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import Product from './screens/Product';
import { useContext } from 'react';
import { Store } from './Store';
const App = () => {
  const {state}=useContext(Store)
  const{cart}=state
  return (
    <Router>
      <div dir="rtl">
        <header>
          <Link to="/"> Amasona Mobile</Link>
          <div className='titel_buy'>
            <p>سبد خرید شما</p>
            {cart.cartItem.length > 0 ? (
                <div className=" buy">{cart.cartItem.length }</div>
            ) : (
              ''
            )}
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/product/:brand" element={<Product />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};
export default App;
