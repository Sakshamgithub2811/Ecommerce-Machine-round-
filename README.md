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

