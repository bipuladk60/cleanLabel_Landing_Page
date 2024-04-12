import './App.css';

import Navbar from './components/navbar';
import HomePage from './components/home';
import ProductPage from './components/product';
import DemoComponent from './components/demo';
import AboutUs from './aboutUs';
import JoinUs from './components/joinUs';




function App() {


  return (
   <div>
      <Navbar/>
      <div id="home"><HomePage/></div>
      <div id="product"><ProductPage/></div>
      <div id="demo"><DemoComponent/></div>
      <div id="about"><AboutUs/></div>
      <div id="joinUs"><JoinUs/></div>
   </div>
  );
}

export default App;