import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    const fetchCart = async () => {
        try {
            const res = await axiosInstance.get("/cart");
            setCartItems(res.data.cart?.items || []);
        } catch (error) {
            alert("Please login first");
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const subtotal = cartItems.reduce((total, item) => {
        return total + item.product.price * item.quantity;
    }, 0);

    const updateQuantity = async (productId, quantity) => {
  try {
    const res = await axiosInstance.put("/cart/update-quantity", {
      productId,
      quantity: Number(quantity),
    });

    setCartItems(res.data.cart.items);
  } catch (error) {
    alert("Quantity update failed");
  }
};

    return (
        <>
            <Navbar />

            <main className="cart-page">
                <p className="breadcrumb">Home / <b>Cart</b></p>

                <div className="cart-table">
                    <div className="cart-header">
                        <span>Product</span>
                        <span>Price</span>
                        <span>Quantity</span>
                        <span>Subtotal</span>
                    </div>

                    {cartItems.map((item) => (
                        <div className="cart-row" key={item._id}>
                            <div className="cart-product">
                                <img src={item.product.image} alt={item.product.name} />
                                <span>{item.product.name}</span>
                            </div>

                            <span>${item.product.price}</span>

                            <select
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.product._id, e.target.value)}
                            >
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <option key={num} value={num}>
                                        {String(num).padStart(2, "0")}
                                    </option>
                                ))}
                            </select>

                            <span>${item.product.price * item.quantity}</span>
                        </div>
                    ))}
                </div>

                <div className="cart-actions">
                    <button   onClick={() => navigate("/")}>Return To Shop</button>
                    <button>Update Cart</button>
                </div>

                <div className="cart-bottom">
                    <div className="coupon-box">
                        <input type="text" placeholder="Coupon Code" />
                        <button>Apply Coupon</button>
                    </div>

                    <div className="cart-total">
                        <h3>Cart Total</h3>

                        <div className="total-line">
                            <span>Subtotal:</span>
                            <span>${subtotal}</span>
                        </div>

                        <div className="total-line">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>

                        <div className="total-line">
                            <span>Total:</span>
                            <span>${subtotal}</span>
                        </div>

                        <button className="checkout-btn">Process to checkout</button>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default Cart;