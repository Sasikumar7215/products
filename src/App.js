import './App.css';
import Navbar from './components/TopNavbar';
import Products from './components/Products';
import AddCart from './components/AddCart';
import { Routes,Route} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { ProductProvider } from './components/productContext';
function App() {
const location=useLocation();
  return (
    <>
    <ProductProvider>
    <div className='nav-color'>
        <Navbar />
      </div>
      {location.pathname !== "/AddCart" && <Products/>}
      <div>
        <Routes>
        <Route path='/products' element={<Products/>} ></Route>
        <Route path='/addCart' element={<AddCart/>} ></Route>
      </Routes>
      </div>
    </ProductProvider>
      </>
     
   
  );
}

export default App;
