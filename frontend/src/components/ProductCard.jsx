import { FiHeart, FiEye, FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-img-box">
        <img src={product.image} alt={product.name} />

        <div className="product-icons">
          <FiHeart />
          <FiEye />
        </div>

        <button onClick={() => onAddToCart(product._id)} className="add-cart-btn">
          <FiShoppingCart /> Add To Cart
        </button>
      </div>

      <h4>{product.name}</h4>
      <p className="price">${product.price}</p>
      <p className="rating">★★★★★ <span>(65)</span></p>
    </div>
  );
};

export default ProductCard;