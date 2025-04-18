import collectionsdata from '../collectionsdata';
// import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa6";
// import { FaShare } from "react-icons/fa6";
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
                        <div className="col-12 desktop-view">
                            <div className="categories text-center">
                                {/* <h3>Categories</h3> */}
                                <div className="categories-list">
                                    <ul>
                                        {/* <li><a onClick={() => handleSelectedCategory(null)} style={{
                                            color: selectedCategory === null ? "#FF9A00" : "#fff",
                                        }} className="d-flex justify-content-between align-items-center gap-5 text-decoration-none">Show All <HiOutlineArrowSmallRight /></a></li> */}
                                        <li><a onClick={() => handleSelectedCategory("Tops")} style={{
                                            color: selectedCategory === "Tops" ? "#FF9A00" : "#fff",
                                        }} className="d-flex justify-content-between align-items-center gap-5 text-decoration-none">Tops</a></li>
                                        <li><a onClick={() => handleSelectedCategory("Shirts")} style={{
                                            color: selectedCategory === "Shirts" ? "#FF9A00" : "#fff",
                                        }} className="d-flex justify-content-between align-items-center gap-5 text-decoration-none">Shirts</a></li>
                                        <li><a onClick={() => handleSelectedCategory("Bottom Wear")} style={{
                                            color: selectedCategory === "Bottom Wear" ? "#FF9A00" : "#fff",
                                        }} className="d-flex justify-content-between align-items-center gap-5 text-decoration-none">Bottom...</a></li>
                                        <li><a onClick={() => handleSelectedCategory("Sarees")} style={{
                                            color: selectedCategory === "Sarees" ? "#FF9A00" : "#fff",
                                        }} className="d-flex justify-content-between align-items-center gap-5 text-decoration-none">Sarees</a></li>
                                        <li><a onClick={() => handleSelectedCategory("Lehangas and Kurtis")} style={{
                                            color: selectedCategory === "Lehangas and Kurtis" ? "#FF9A00" : "#fff",
                                        }} className="d-flex justify-content-between align-items-center gap-5 text-decoration-none">Lehangas...</a></li>
                                        <li><a onClick={() => handleSelectedCategory("Footwear")} style={{
                                            color: selectedCategory === "Footwear" ? "#FF9A00" : "#fff",
                                        }} className="d-flex justify-content-between align-items-center gap-5 text-decoration-none">Footwears</a></li>
                                        <li><a onClick={() => handleSelectedCategory("Handbags")} style={{
                                            color: selectedCategory === "Handbags" ? "#FF9A00" : "#fff",
                                        }} className="d-flex justify-content-between align-items-center gap-5 text-decoration-none">Handbags</a></li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                        {/* Products Display */}
                        <div className="col-12">
                            <div className="products-list">
                                <div className="row">
                                    {
                                        filteredProducts.map((product) => (
                                            <div key={product.id} className="col-md-4 col-lg-2">
                                                <div className="lists">
                                                    {/* Product Image */}
                                                    <div className="product-img">
                                                        <img src={product.image} alt={product.alt} loading="lazy" />
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
                                                                {/* <button><FaShare /></button> */}
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
