# 🛒 MERN E-Commerce Application

A full-stack E-Commerce application built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

---

## 🚀 Features

### 🔐 Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes

### 📦 Products
- Fetch All Products
- Display Products on Home Page
- Product Categories

### 🛒 Cart
- Add Product to Cart
- View Cart Items
- Update Product Quantity
- Calculate Cart Total

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- React Icons
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- BcryptJS
- CORS
- Dotenv

---

## 📁 Project Structure

```bash
E-comm/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── .env
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
│
├── .gitignore
└── README.md
```
## 📂 Backend Structure

```bash
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── productController.js
│   └── cartController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   ├── Product.js
│   └── Cart.js
│
├── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   └── cartRoutes.js
│
├── .env
├── server.js
├── package.json
└── package-lock.json
```

### Backend Responsibilities

- Database Connection
- Authentication & Authorization
- Product Management
- Cart Management
- JWT Verification
- MongoDB Operations

---

## 📂 Frontend Structure

```bash
frontend/
│
├── public/
│
├── src/
│   │
│   ├── api/
│   │   └── axiosInstance.js
│   │
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Cart.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── package.json
└── vite.config.js
```

### Frontend Responsibilities

- User Authentication UI
- Product Listing
- Cart Management UI
- Protected Routes
- API Integration using Axios
- Responsive Design

---

## ⚙️ Environment Variables

### Backend (.env)

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/ecommerce

CLIENT_URL=http://localhost:5173

JWT_SECRET=SAKSHAM
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 📥 Installation

### Clone Repository

```bash
git clone https://github.com/Sakshamgithub2811/Ecommerce-Machine-round-.git
```

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## 📡 API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
```

#### Login User

```http
POST /api/auth/login
```

---

### Products

#### Get All Products

```http
GET /api/products
```

#### Create Product

```http
POST /api/products
```

---

### Cart

#### Add Product To Cart

```http
POST /api/cart/add
```

#### Get Cart

```http
GET /api/cart
```

#### Update Product Quantity

```http
PUT /api/cart/update-quantity
```

---

## 🔄 Authentication Flow

1. User registers an account.
2. User logs in.
3. Backend generates JWT token.
4. Token is stored in localStorage.
5. Axios Interceptor automatically sends token with every protected request.
6. Backend verifies token before allowing access to protected APIs.

---



## 👨‍💻 Author

**Saksham Shrivastava**

- MERN Stack Developer
- GitHub: https://github.com/Sakshamgithub2811

