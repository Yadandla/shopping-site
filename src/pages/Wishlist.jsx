// import { FaShare } from "react-icons/fa6";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { useStoreContext } from "./StoreProvider";

export const Wishlist = () => {

    const { cart, addProductToCart, removeProductFromCart, wishlist, removeProductFromWishlist } = useStoreContext();

    return (
        <>
            {/* Wishlist Part Starts */}
            <div className="wishlist space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <h2 className="text-center">Your Trends<span className="u-char">U</span> Wishlist</h2>
                        </div>
                        {
                            wishlist?.length === 0 ? (
                                <p className="text-center">Your wishlist is empty</p>
                            ) : (
                                <div className="row pt-2 wc-align">
                                    {
                                        wishlist.map((item) => (
                                            <div key={item.Id} className="col-md-6 col-lg-4 d-flex justify-content-center">
                                                <div className="lists  wc-list">
                                                    <div className="sh-btn d-flex justify-content-end align-items-center">
                                                        {/* <button><FaShare /></button> */}
                                                        <button onClick={() => removeProductFromWishlist(item.id)}><RiDeleteBin3Fill /></button>
                                                    </div>
                                                    <div className="product-img">
                                                        <img src={item.image} alt={item.alt} />
                                                    </div>
                                                    <div className="items-details">
                                                        <h4>{item.title}</h4>
                                                        <div className="d-flex justify-content-between align-items-center pt-2 pb-3">
                                                            <p> &#8377;{item.price}</p>
                                                        </div>
                                                        <div className="d-flex justify-content-between align-items-center bc-btn">
                                                            <button>{item.buy}</button>
                                                            <button onClick={() => {
                                                                if (cart.some((product) => product.id === item.id)) {
                                                                    removeProductFromCart(item.id);
                                                                } else {
                                                                    addProductToCart(item);
                                                                }
                                                            }}>{cart.some((product) => product.id === item.id) ? "Added to Cart" : "Add to Cart"}</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            )}
                    </div>
                </div>
            </div>
            {/* Wishlist Part Ends */}
        </>
    )
}

