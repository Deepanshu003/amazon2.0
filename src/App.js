import './App.css';
import Header from './Header';
// import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Checkout from './Checkout';
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        {/* <Home /> */}
        <Routes>
        <Route path='/' element={<Home />}/> 
       <Route path='/Login' element={<Login />} />
          <Route path='/checkout' element={<Checkout />}/> 
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
