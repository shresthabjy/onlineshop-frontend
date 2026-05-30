import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

import Home from "./pages/Home";

import Category from "./pages/category";
import CategoryCreate from "./pages/category/create";
import CategoryEdit from "./pages/category/edit";

import Product from "./pages/product";
import ProductCreate from "./pages/product/create";
import ProductEdit from "./pages/product/edit";

import Login from "./pages/user/Login";
import Register from "./pages/user/Register";

import NotFound from "./pages/NotFound";

function App() {

  return (

    <Routes>

      {/* Public Routes */}

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      {/* Protected Layout */}

      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >

        <Route path="/" element={<Home />} />

        <Route path="/category" element={<Category />} />

        <Route
          path="/category/create"
          element={<CategoryCreate />}
        />

        <Route
          path="/category/edit/:id"
          element={<CategoryEdit />}
        />

        <Route path="/product" element={<Product />} />

        <Route
          path="/product/create"
          element={<ProductCreate />}
        />

        <Route
          path="/product/edit/:id"
          element={<ProductEdit />}
        />

      </Route>

      {/* 404 */}

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;