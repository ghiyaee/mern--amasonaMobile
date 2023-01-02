// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
const App = () => {
  return (
    <Router>
      <div dir="rtl">
        <header>
          <a href="/"> Amasona Mobile</a>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};
export default App;
