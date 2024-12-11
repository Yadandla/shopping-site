import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { useStoreContext } from "./StoreProvider";

// eslint-disable-next-line react/prop-types
export const Popup = ({ product, closePopup }) => {

    const { cart, addProductToCart, removeProductFromCart, wishlist, addProductToWishlist, removeProductFromWishlist } = useStoreContext();

    if (!product) return null;
    return (
        <div className="popup-overlay">
            <section className="product-cont">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-end">
                                <button onClick={closePopup}>X</button>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="popup-item-img">
                                <img src={product.image} alt={product.alt} />
                                <div className="items-btn">
                                    <button onClick={() => {
                                        if (cart.some((item) => item.id === product.id)) {
                                            removeProductFromCart(product.id);
                                        } else {
                                            addProductToCart(product);
                                        }
                                    }} style={{
                                        color: cart.some((item) => item.id === product.id) ? "#FF9A00" : "#fff",
                                    }}>{cart.some((item) => item.id === product.id) ? "Added to Cart" : "Add to Cart"}</button>
                                    <button onClick={() => {
                                        if (wishlist.some((item) => item.id === product.id)) {
                                            removeProductFromWishlist(product.id);
                                        } else {
                                            addProductToWishlist(product);
                                        }
                                    }} style={{
                                        backgroundColor: wishlist.some((item) => item.id === product.id) ? "#000" : "transparent",
                                        color: wishlist.some((item) => item.id === product.id) ? "#FF9A00" : "#fff",
                                    }}><FaHeart /></button>
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="product-description">
                                <h2>{product.title}</h2>
                                <div className="d-flex justify-content-start align-items-center gap-1">
                                    <span className="span1">{product.rating} <FaStar style={{ color: "#FF9A00" }} /></span>
                                    <span>{product.review}</span>
                                </div>
                                <p className="item-price">&#8377;{product.price}</p>
                                <div className="product-sizes">
                                    <h3>Available Sizes</h3>
                                    <div>
                                        {product.sizes?.map((size, index) => (
                                            <span key={index} className={size.available ? "available" : "unavailable"}>
                                                <a>{size.label}</a>
                                            </span>
                                        )) || product.colors?.map((color, index) => (
                                            <span key={index} className={color.available ? "available" : "unavailable"}>
                                                <a>{color.color}</a>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3>Description</h3>
                                    <p>{product.description}</p>
                                </div>
                                <div className="items-details">
                                    <h3>Product Details</h3>
                                    <div>
                                        <ul>
                                            {product.details?.map((detail, index) => (
                                                <li key={index}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
