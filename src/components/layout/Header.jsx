import { NavLink } from "react-router-dom";
import { PiShoppingCartFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaHeart } from "react-icons/fa6";

const Header = () => {

    const openMenu = () => {
        document.getElementById("mobile-navlink").style.width = "200px";
        document.getElementById("openmenu").style.display = "none";
    }
    const closeMenu = () => {
        document.getElementById("mobile-navlink").style.width = "0";
        document.getElementById("openmenu").style.display = "block";

    }
    return (
        <>
            <header>
                <section className="header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 mobile-view">
                                <div className="logo">
                                    <NavLink to="/" ><h1>Trends<span>U</span></h1></NavLink>
                                </div>
                                <div className="ctas">
                                    <button id="openmenu" onClick={openMenu}><GiHamburgerMenu /></button>
                                    <ul>
                                        <li className="nav-item2"><NavLink to="/wishlist" className={({ isActive }) => isActive ? "nav-link2" : "nav-link3"}><FaHeart /></NavLink></li>
                                        <li className="nav-item2"><NavLink to="/cart" className={({ isActive }) => isActive ? "nav-link2" : "nav-link3"}><PiShoppingCartFill /></NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex justify-content-center align-items-center">
                                <div className="mobile-navlink" id="mobile-navlink">
                                    <button id="closemenu" onClick={closeMenu}><ImCross /></button>
                                    <div className="menu-links">
                                        <ul>
                                            <li className="nav-item"><NavLink to="/" className={({ isActive }) => isActive ? "Nav-link active" : "Nav-link"}>Home</NavLink></li>
                                            <li className="nav-item"><NavLink to="/about" className="Nav-link">About</NavLink></li>
                                            <li className="nav-item"><NavLink to="/shop" className="Nav-link">Shop</NavLink></li>
                                            <li className="nav-item"><NavLink to="/wishlist" className="Nav-link wishlist-tab">Wishlist</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex justify-content-end align-items-center desktop-view">
                                <div className="ctas">
                                    <ul>
                                        {/* <li className="nav-item2"><NavLink to="/account"><IoMdPerson /> Account</NavLink></li> */}
                                        <li className="nav-item2"><NavLink to="/cart" className={({ isActive }) => isActive ? "nav-link2" : "nav-link3"}><PiShoppingCartFill /> Cart</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header
