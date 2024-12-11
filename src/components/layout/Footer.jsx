import { NavLink } from "react-router-dom"
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { LiaShoppingCartSolid } from "react-icons/lia";

const Footer = () => {

    // const scrollToTop = () => {
    //     window.scrollTo(0, 0);
    // }

    return (
        <>
            <footer className="footer">
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5 col-lg-3">
                                <div className="footer-logo">
                                    {/* <img src="" alt="logo" /> */}
                                    <h2>ShopNow</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore perferendis corporis architecto fugiat modi cumque totam quo dolor numquam impedit.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-2">
                                <div className="quick-links">
                                    <h2>Quick Links</h2>
                                    <ul>
                                        <li><NavLink to="/"><LiaShoppingCartSolid /> Home</NavLink></li>
                                        <li><NavLink to="/about"><LiaShoppingCartSolid />About</NavLink></li>
                                        <li><NavLink to="/shop"><LiaShoppingCartSolid /> Shop</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-2">
                                <div className="information">
                                    <h2>Information</h2>
                                    <ul>
                                        <li><NavLink><LiaShoppingCartSolid /> Terms & Conditions</NavLink></li>
                                        <li><NavLink><LiaShoppingCartSolid /> Delivery Terms</NavLink></li>
                                        <li><NavLink><LiaShoppingCartSolid /> Order Tracking</NavLink></li>
                                        <li><NavLink><LiaShoppingCartSolid /> Returns Policy</NavLink></li>
                                        <li><NavLink><LiaShoppingCartSolid /> Privacy Policy</NavLink></li>
                                        <li><NavLink><LiaShoppingCartSolid /> FAQ</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-2">
                                <div className="address">
                                    <h2>Address</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, delectus?</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="payments">
                                    <h2>Payment Methods</h2>
                                    <ul>
                                        <li><FaCcVisa /></li>
                                        <li><FaCcPaypal /></li>
                                        <li><FaCcMastercard /></li>
                                        <li><FaCcDiscover /></li>
                                    </ul>
                                </div>
                            </div>
                            <hr style={{ color: "#ffffff52" }} />
                            <div className="col-md-6">
                                <div className="copyrights">
                                    <p>© 2024 ShopNow. All Rights Reserved | Developed by ShopNow Team</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="socila-media">
                                    <ul>
                                        <li><a href=""><FaFacebook /></a></li>
                                        <li><a href=""><FaSquareXTwitter /></a></li>
                                        <li><a href=""><FaLinkedin /></a></li>
                                        <li><a href=""><FaInstagramSquare /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer
