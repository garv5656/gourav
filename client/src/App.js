
import './App.css';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Contact from './components/Contact/contact';
import Home from './components/Home/home';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
  
    <Router>

    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    <Footer/>
    </Router>
  );
}
export default App;
