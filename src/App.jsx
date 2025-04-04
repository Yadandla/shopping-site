import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import Applayout from "./components/Applayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import './Responsive.css';
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/Wishlist";
import { StoreProvider } from "./pages/StoreProvider";
// import { Account } from "./pages/Account";
import { ScrollToTop } from "./pages/ScrollToTop";
import Pricing from "./pages/Pricing";

const App = () => {

  return (
    <StoreProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Applayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/wishlist" element={<Wishlist />} />
            {/* <Route path="/account" element={<Account />} /> */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/pricing" element={<Pricing />} />
          </Route>
        </Routes>
      </HashRouter>
    </StoreProvider>
  )

};

export default App;