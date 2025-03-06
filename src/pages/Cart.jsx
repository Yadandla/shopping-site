// import { FaShare } from "react-icons/fa6";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { useStoreContext } from "./StoreProvider";

export const Cart = () => {

    const { cart, removeProductFromCart } = useStoreContext();

    return (
        <>
            {/* Cart Part Starts */}
            <div className="cart space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <h2 className="text-center">Your Trends<span className="u-char">U</span> Cart</h2>
                        </div>
                        {
                            cart?.length === 0 ? (
                                <p className="text-center">Your cart is empty</p>
                            ) : (
                                <div className="row pt-2 wc-align">
                                    {
                                        cart.map((item) => (
                                            <div key={item.Id} className="col-md-3 col-lg-3 d-flex justify-content-center">
                                                <div className="lists wc-list">
                                                    <div className="sh-btn d-flex justify-content-end align-items-center">
                                                        {/* <button><FaShare /></button> */}
                                                        <button onClick={() => removeProductFromCart(item.id)}><RiDeleteBin3Fill /></button>
                                                    </div>
                                                    <div className="product-img">
                                                        <img src={item.image} alt="product" />
                                                    </div>
                                                    <div className="items-details">
                                                        <h4>{item.title}</h4>
                                                        <div className="d-flex justify-content-between align-items-center bc-btn pt-2">
                                                            <p> &#8377;{item.price}</p>
                                                            <button>{item.buy}</button>
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
            {/* Cart Part Ends */}
        </>
    )
}


