import { FaHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { BsArrowsFullscreen } from "react-icons/bs";
import collectionsdata from "../collectionsdata";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { IoStarSharp } from "react-icons/io5";
import { IoMdStarHalf } from "react-icons/io";
// import { useStoreContext } from "./StoreProvider";

export const Home = () => {

    // const { cart, addProductToCart, removeProductFromCart, wishlist, addProductToWishlist, removeProductFromWishlist } = useStoreContext();


    return (
        <>
            {/* Banners Part Starts*/}
            <section className="banner-part">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./images/banner1.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/banner2.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/banner3.png" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            {/* Banners Part Ends*/}

            {/* Introduction Part Starts */}
            <section className="Intro-part space">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <h2 className="pb-1 fw-bold">Welcome to Trends<span className="u-char">U</span> – Redefine Your Style!</h2>
                                <p>Step into a world where fashion meets individuality. At TrendsU, we believe every woman deserves to feel confident and stylish in pieces crafted with care. Discover our exclusive collection of timeless essentials, bold trends, and season-ready looks curated just for you. Whether you’re dressing up or keeping it casual, we’ve got styles that speak to your unique personality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Introduction Part Ends */}

            {/* Collections Part Starts */}
            <section className="collections-part space">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-left">
                                <h2 className="pb-1 fw-bold">Top Picks for You</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row new-arrivals">
                        {collectionsdata.toppicks.map((picks) => (
                            <div key={picks.id} className="col-md-6 col-lg-3">
                                <div className="product-card">
                                    <div className="likes">
                                        <ul>
                                            <li><a><FaHeart /></a></li>
                                            <li><a><FaCartShopping /></a></li>
                                            <li><a><FaShare /></a></li>
                                            <li><a><BsArrowsFullscreen /></a></li>
                                        </ul>
                                    </div>
                                    <img src={picks.image} alt="" />
                                    <div className="text-center pt-2">
                                        <h4 className="fw-bold">{picks.title}</h4>
                                        <p>${picks.price}</p>
                                        <div className="buy-btn pb-3">
                                            <a href="#" className="text-capitalize">{picks.button}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Collections Part Ends */}

            {/* Offers Part Starts */}
            <section className="poster space">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <img src="images/sales1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <img src="images/sales2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Offers Part Ends */}

            {/* Social Media Feed Part Starts */}
            <section className="media-feed space">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pb-4">
                            <div className="text-center">
                                <h2 className="pb-1 fw-bold">Follow the Trends<span className="u-char">U</span> Fashion Buzz</h2>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex media-gallery">
                        <div><img src="images/feed1.png" alt="" /></div>
                        <div><img src="images/feed2.png" alt="" /></div>
                        <div><img src="images/feed3.png" alt="" /></div>
                        <div><img src="images/feed4.png" alt="" /></div>
                        <div><img src="images/feed5.png" alt="" /></div>
                    </div>
                </div>
            </section>
            {/* Social Media Feed Part Ends */}

            {/* Testimonials Part Starts */}
            <section className="reviews-part space">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <h2 className="pb-1 fw-bold">Trending Reviews from Trends<span className="u-char">U</span> Shoppers</h2>
                            </div>
                        </div>
                    </div>
                    <div className="py-4">
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={3}
                            loop={true}
                            autoplay={{ delay: 4000 }}
                            breakpoints={{
                                390: {
                                    slidesPerView: 1,
                                    spaceBetween: 40,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 50,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                            // navigation
                            pagination={{ clickable: true }}>
                            <SwiperSlide>
                                <div className="review-card">
                                    <div className="review-img">
                                        <img src="images/review1.png" alt="" />
                                    </div>
                                    <div className="review-cont">
                                        <h2>Priya S.</h2>
                                        <h3>Mumbai</h3>
                                        <span><IoStarSharp /></span>
                                        <span><IoStarSharp /></span>
                                        <span><IoStarSharp /></span>
                                        <span><IoStarSharp /></span>
                                        <span><IoMdStarHalf /></span>
                                        <p>“Trendsu is my go-to for trendy footwear! I bought a pair of heels last month, and they’re so comfortable yet stylish. Delivery was quick, and the quality exceeded my expectations. Highly recommend!”</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="review-card">
                                    <div className="review-img">
                                        <img src="images/review2.png" alt="" />
                                    </div>
                                    <div className="review-cont">
                                        <h2>Anjali M.</h2>
                                        <h3>Delhi</h3>
                                        <span><IoStarSharp /></span>
                                        <span><IoStarSharp /></span>
                                        <span><IoStarSharp /></span>
                                        <span><IoStarSharp /></span>
                                        <span><IoStarSharp /></span>
                                        <p>“I was a bit skeptical about buying clothes online, but Trendsu changed my mind. The dresses are exactly like the pictures, and the fit is amazing! Plus, I got everything at a great price during their sale.”</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="review-card">
                                    <div className="review-img">
                                        <img src="images/review3.png" alt="" />
                                    </div>
                                    <div className="review-cont">
                                        <h2>Divya R.</h2>
                                        <h3>Hyderabad</h3>
                                        <span><IoStarSharp /></span>
                                        <span><IoStarSharp /></span>
                                        <span><IoStarSharp /></span>
                                        <span><IoStarSharp /></span>
                                        <span><IoMdStarHalf /></span>
                                        <p>“The checkout process was seamless, and my order arrived in just 3 days! I got a beautiful handbag and some flats, both of which look so premium. Totally worth every penny!”</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="review-card">
                                    <div className="review-img">
                                        <img src="images/review4.png" alt="" />
                                    </div>
                                    <div className="review-cont">
                                        <h2>Pooja N.</h2>
                                        <h3>Ahmedabad</h3>
                                        <span><IoStarSharp /></span>
                                        <span><IoStarSharp /></span>
                                        <span><IoStarSharp /></span>
                                        <span><IoStarSharp /></span>
                                        <span><IoStarSharp /></span>
                                        <p>“Great collection at affordable prices! I bought a few tops, and they’re so comfy and stylish. I’ll definitely be shopping here more often.”</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
            </section>
            {/* Testimonials Part Ends */}
        </>
    )
}

