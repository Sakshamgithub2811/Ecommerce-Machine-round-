import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import axiosInstance from "../api/axiosInstance";

const Home = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const res = await axiosInstance.get("/products");
        setProducts(res.data.products);
    };

    const addToCart = async (productId) => {
        try {
            await axiosInstance.post("/cart/add", { productId, quantity: 1 });
            alert("Product added to cart");
        } catch {
            alert("Please login first");
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const staticProducts = [
        { name: "The north coat", price: 260, image: "https://pngimg.com/uploads/jacket/jacket_PNG8058.png" },
        { name: "Gucci duffle bag", price: 960, image: "https://pngimg.com/uploads/women_bag/women_bag_PNG6426.png" },
        { name: "RGB liquid CPU Cooler", price: 160, image: "https://pngimg.com/uploads/cooler/cooler_PNG18.png" },
        { name: "Small BookShelf", price: 360, image: "https://pngimg.com/uploads/table/table_PNG7005.png" },
    ];

    return (
        <>
            <Navbar />

            <main className="home-container">
                <section className="hero-section">
                    <div className="category-menu">
                        <p>Woman’s Fashion ›</p>
                        <p>Men’s Fashion ›</p>
                        <p>Electronics</p>
                        <p>Home & Lifestyle</p>
                        <p>Medicine</p>
                        <p>Sports & Outdoor</p>
                        <p>Baby’s & Toys</p>
                        <p>Groceries & Pets</p>
                        <p>Health & Beauty</p>
                    </div>

                    <div className="hero-banner">
                        <h4> iPhone 14 Series</h4>
                        <h1>Up to 10% <br /> off Voucher</h1>
                        <button>Shop Now →</button>
                    </div>
                </section>

                <section className="products-section">
                    <p className="section-label">Today's</p>

                    <div className="section-title-row">
                        <h2>Flash Sales</h2>
                        <div className="timer">
                            <b>03</b> : <b>23</b> : <b>19</b> : <b>56</b>
                        </div>
                    </div>

                    <div className="products-grid">
                        {products.slice(0, 4).map((product) => (
                            <ProductCard
                                key={product._id}
                                product={product}
                                onAddToCart={addToCart}
                            />
                        ))}
                    </div>

                    <button className="view-btn">View All Products</button>
                </section>

                <section className="category-section">
                    <p className="section-label">Categories</p>
                    <h2>Browse By Category</h2>

                    <div className="category-grid">
                        <div>
                            <span className="category-icon">📱</span>
                            <p>Phones</p>
                        </div>

                        <div>
                            <span className="category-icon">💻</span>
                            <p>Computers</p>
                        </div>

                        <div>
                            <span className="category-icon">⌚</span>
                            <p>SmartWatch</p>
                        </div>

                        <div className="active-category">
                            <span className="category-icon">📷</span>
                            <p>Camera</p>
                        </div>

                        <div>
                            <span className="category-icon">🎧</span>
                            <p>HeadPhones</p>
                        </div>

                        <div>
                            <span className="category-icon">🎮</span>
                            <p>Gaming</p>
                        </div>
                    </div>
                </section>

                <section className="products-section">
                    <p className="section-label">This Month</p>

                    <div className="section-title-row">
                        <h2>Best Selling Products</h2>
                        <button className="small-view-btn">View All</button>
                    </div>

                    <div className="products-grid">
                        {staticProducts.map((product, index) => (
                            <ProductCard
                                key={index}
                                product={product}
                                onAddToCart={() => alert("Only backend products can be added")}
                            />
                        ))}
                    </div>
                </section>

                <section className="music-banner">
                    <div>
                        <p>Categories</p>
                        <h1>Enhance Your <br /> Music Experience</h1>

                        <div className="music-time">
                            <span>23<br />Hours</span>
                            <span>05<br />Days</span>
                            <span>59<br />Minutes</span>
                            <span>35<br />Seconds</span>
                        </div>

                        <button>Buy Now!</button>
                    </div>
                </section>

                <section className="products-section">
                    <p className="section-label">Our Products</p>
                    <h2>Explore Our Products</h2>

                    <div className="products-grid">
                        {[...products, ...staticProducts].slice(0, 8).map((product, index) => (
                            <ProductCard
                                key={product._id || index}
                                product={product}
                                onAddToCart={
                                    product._id
                                        ? addToCart
                                        : () => alert("Only backend products can be added")
                                }
                            />
                        ))}
                    </div>

                    <button className="view-btn">View All Products</button>
                </section>

                <section className="arrival-section">
                    <p className="section-label">Featured</p>
                    <h2>New Arrival</h2>

                    <div className="arrival-grid">
                        <div className="arrival-big">
                            <div className="arrival-content">
                                <h3>PlayStation 5</h3>
                                <p>Black and White version of the PS5</p>
                                <button>Shop Now</button>
                            </div>
                        </div>

                        <div className="arrival-right">
                            <div className="arrival-women">
                                <div className="arrival-content">
                                    <h3>Women's Collections</h3>
                                    <p>Featured woman collections</p>
                                    <button>Shop Now</button>
                                </div>
                            </div>

                            <div className="arrival-bottom">
                                <div className="arrival-speaker">
                                    <div className="arrival-content">
                                        <h3>Speakers</h3>
                                        <button>Shop Now</button>
                                    </div>
                                </div>

                                <div className="arrival-perfume">
                                    <div className="arrival-content">
                                        <h3>Perfume</h3>
                                        <button>Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="service-section">
                    <div>
                        <h3>🚚</h3>
                        <h4>FREE AND FAST DELIVERY</h4>
                        <p>Free delivery for all orders over $140</p>
                    </div>

                    <div>
                        <h3>🎧</h3>
                        <h4>24/7 CUSTOMER SERVICE</h4>
                        <p>Friendly 24/7 customer support</p>
                    </div>

                    <div>
                        <h3>🛡️</h3>
                        <h4>MONEY BACK GUARANTEE</h4>
                        <p>We return money within 30 days</p>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Home;