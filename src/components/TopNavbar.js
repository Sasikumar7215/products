/* eslint-disable no-unreachable */

import { Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useProduct } from "./productContext";
const Navbar = () => {
    const {getCartCount}=useProduct();
    const navigate=useNavigate();
    const gotoCart=()=>{
        navigate('/AddCart');
    }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2 my-cart">MyCart</div>
        <div className="col-md-6">
          <input type="search" placeholder="...Search"></input>
        </div>
        <div className="col-md-2 dropdown-top">
          <Dropdown>
            <Dropdown.Toggle>LOGIN</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="">My Profile</Dropdown.Item>
              <Dropdown.Item href="">Order</Dropdown.Item>
              <Dropdown.Item href="">SignUp</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div role="button" onClick={()=>gotoCart()} className="col-md-2 cart-style">
          <FaShoppingCart size="30px" color="white" /><span class='badge badge-warning'>{getCartCount()}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
