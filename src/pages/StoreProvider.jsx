import { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const StoreContext = createContext();

// Create a provider component
// eslint-disable-next-line react/prop-types
export const StoreProvider = ({ children }) => {

    // Simplify state initialization with safe defaults
    const initializeState = (key, defaultValue) => {
        try {
            const storedData = localStorage.getItem(key);
            return storedData ? JSON.parse(storedData) : defaultValue;
        } catch (error) {
            console.error(`Error reading key "${key}" from localStorage:`, error);
            return defaultValue;
        }
    };

    const [cart, setCart] = useState(() => initializeState("cart", []));

    // Load wishlist from localStorage or initialize with an empty array
    const [wishlist, setWishlist] = useState(() => initializeState("wishlist", []));

    // Update localStorage whenever wishlist changes
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Cart functions
    const addProductToCart = (product) => {
        setCart((prevCart) => {
            // Prevent adding duplicates to the wishlist
            if (!prevCart.some((item) => item.id === product.id)) {
                return [...prevCart, product];
            }
            return prevCart;
        });
    }

    const removeProductFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    }

    // Wishlist functions
    const addProductToWishlist = (product) => {
        setWishlist((prevWishlist) => {
            // Prevent adding duplicates to the wishlist
            if (!prevWishlist.some((item) => item.id === product.id)) {
                return [...prevWishlist, product];
            }
            return prevWishlist;
        });
    }

    const removeProductFromWishlist = (productId) => {
        setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== productId));
    }

    // Reload wishlist and cart from localStorage on app load to ensure consistency
    useEffect(() => {
        const savedWishlist = initializeState("wishlist", []);
        const savedCart = initializeState("cart", []);
        setWishlist(savedWishlist);
        setCart(savedCart);
    }, []);

    return (
        <StoreContext.Provider
            value={{
                cart,
                wishlist,
                addProductToCart,
                removeProductFromCart,
                addProductToWishlist,
                removeProductFromWishlist
            }}>
            {children}
        </StoreContext.Provider>
    )

}
// Custom hook for using the store context
export const useStoreContext = () => useContext(StoreContext)