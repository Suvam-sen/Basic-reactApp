import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items)
  // console.log(cartItems)

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
        <img className="logo" src={LOGO_URL} alt="" />
        </Link>
      </div>

      <div className="nav-items">
        <ul className="">
          <li>Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li className="text-green">
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart - ({cartItems.length})</Link>
          </li>
          <li className="font-bold" >{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
