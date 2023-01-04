import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import Product from './screens/Product';
const App = () => {
  return (
    <Router>
      <div dir="rtl">
        <header>
          <Link to="/"> Amasona Mobile</Link>
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
