import collectionsdata from '../collectionsdata';
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { FaHeart, FaShare } from "react-icons/fa6";
import { useState } from 'react';
import { useStoreContext } from './StoreProvider';
import { Popup } from './Popup';

export const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState();

    const [popup, setPopup] = useState(null);

    const handleSelectedCategory = (category) => {
        setSelectedCategory(category);
    };
    const { cart, addProductToCart, removeProductFromCart, wishlist, addProductToWishlist, removeProductFromWishlist } = useStoreContext();

    const filteredProducts = selectedCategory ? collectionsdata.productlists.filter((product) => product.category === selectedCategory) : collectionsdata.productlists


    const openPopup = (product) => {
        setPopup(product);
    }

    const closePopup = () => {
        setPopup(null);
    }

    return (
        <>
            {/* Shopping Categories Part Starts */}
            <section className="shopping space">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="pb-1 fw-bold">Shop the Best of Trends<span className="u-char">U</span></h2>
                        </div>

                        {/* Sidebar with Categories */}
                        <div className="col-md-4 col-lg-3">
                            <div className="categories">
                                <h3>Categories</h3>
                                <div className="categories-list">
                                    <ul>
                                        {/* <li><a onClick={() => handleSelectedCategory(null)} style={{
                                            color: selectedCategory === null ? "#FF9A00" : "#fff",
                                        }} className="d-flex justify-content-between align-items-center gap-5 text-decoration-none">Show All <HiOutlineArrowSmallRight /></a></li> */}
                                        <li><a onClick={() => handleSelectedCategory("Tops")} style={{
                                            color: selectedCategory === "Tops" ? "#FF9A00" : "#fff",
                                        }} className="d-flex justify-content-between align-items-center gap-5 text-decoration-none">Tops <HiOutlineArrowSmallRight /></a></li>
                                        <li><a onClick={() => handleSelectedCategory("Shirts")} style={{
                                            color: selectedCategory === "Shirts" ? "#FF9A00" : "#fff",
                                        }} className="d-flex justify-content-between align-items-center gap-5 text-decoration-none">Shirts <HiOutlineArrowSmallRight /></a></li>
                                        <li><a onClick={() => handleSelectedCategory("Bottom Wear")} style={{
                                            color: selectedCategory === "Bottom Wear" ? "#FF9A00" : "#fff",
                                        }} className="d-flex justify-content-between align-items-center gap-5 text-decoration-none">Bottom Wear <HiOutlineArrowSmallRight /></a></li>
                                        <li><a onClick={() => handleSelectedCategory("Sarees")} style={{
                                            color: selectedCategory === "Sarees" ? "#FF9A00" : "#fff",
                                        }} className="d-flex justify-content-between align-items-center gap-5 text-decoration-none">Sarees <HiOutlineArrowSmallRight /></a></li>
                                        <li><a onClick={() => handleSelectedCategory("Lehangas and Kurtis")} style={{
                                            color: selectedCategory === "Lehangas and Kurtis" ? "#FF9A00" : "#fff",
                                        }} className="d-flex justify-content-between align-items-center gap-5 text-decoration-none">Lehangas and Kurtis <HiOutlineArrowSmallRight /></a></li>
                                        <li><a onClick={() => handleSelectedCategory("Footwear")} style={{
                                            color: selectedCategory === "Footwear" ? "#FF9A00" : "#fff",
                                        }} className="d-flex justify-content-between align-items-center gap-5 text-decoration-none">Footwears <HiOutlineArrowSmallRight /></a></li>
                                        <li><a onClick={() => handleSelectedCategory("Handbags")} style={{
                                            color: selectedCategory === "Handbags" ? "#FF9A00" : "#fff",
                                        }} className="d-flex justify-content-between align-items-center gap-5 text-decoration-none">Handbags <HiOutlineArrowSmallRight /></a></li>
                                    </ul>

                                    {/* Filters for Size, Color, and Sort */}
                                    {/* <div className="select-opt">
                                        <div className="inner-select">
                                            <select>
                                                <option>Size</option>
                                                <option>S</option>
                                                <option>M</option>
                                                <option>L</option>
                                                <option>XS</option>
                                                <option>XL</option>
                                                <option>XXL</option>
                                            </select>
                                        </div>
                                        <div className="inner-select">
                                            <select>
                                                <option>Color</option>
                                                <option>Black</option>
                                                <option>White</option>
                                                <option>Yellow</option>
                                                <option>Pink</option>
                                            </select>
                                        </div>
                                        <div className="inner-select">
                                            <select>
                                                <option>Sort</option>
                                                <option>A to Z</option>
                                                <option>New Arrivals</option>
                                                <option>Popular</option>
                                            </select>
                                        </div>
                                        <div className="ar-btn d-flex gap-5">
                                            <button>Apply</button>
                                            <button>Reset</button>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        {/* Products Display */}
                        <div className="col-md-8 col-lg-9">
                            <div className="products-list">
                                <div className="row">
                                    {
                                        filteredProducts.map((product) => (
                                            <div key={product.id} className="col-md-6 col-lg-3">
                                                <div className="lists">
                                                    {/* Product Image */}
                                                    <div className="product-img">
                                                        <img src={product.image} alt={product.alt} />
                                                    </div>
                                                    {/* Product Details */}
                                                    <div className="items-details">
                                                        <h4 className="text-capitalize">{product.shortTitle}<a className="know-more" onClick={() => openPopup(product)}>more</a></h4>
                                                        <div className="d-flex justify-content-sm-between align-items-sm-center">
                                                            {/* toLocaleString */}
                                                            <p>&#8377;{product.price}</p>
                                                            <div className="sh-btn">
                                                                <button onClick={() => {
                                                                    if (wishlist.some((item) => item.id === product.id)) {
                                                                        removeProductFromWishlist(product.id);
                                                                    } else {
                                                                        addProductToWishlist(product);
                                                                    }
                                                                }} style={{
                                                                    backgroundColor: wishlist.some((item) => item.id === product.id) ? "black" : "transparent",
                                                                    color: wishlist.some((item) => item.id === product.id) ? "#FF9A00" : "black",
                                                                }}><FaHeart /></button>
                                                                <button><FaShare /></button>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-between align-items-center bc-btn">
                                                            <button>{product.buy}</button>
                                                            <button onClick={() => {
                                                                if (cart.some((item) => item.id === product.id)) {
                                                                    removeProductFromCart(product.id);
                                                                } else {
                                                                    addProductToCart(product);
                                                                }
                                                            }}>{cart.some((item) => item.id === product.id) ? "Added to Cart" : "Add to Cart"}</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shopping Categories Part Ends */}

            {/* Render Popup */}
            {popup && <Popup product={popup} closePopup={closePopup} />}
        </>
    );
};

export default Shop;
