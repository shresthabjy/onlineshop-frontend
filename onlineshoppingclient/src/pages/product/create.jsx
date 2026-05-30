import React, { useState, useEffect } from "react";
import ProductForm from "./productForm";
import { productService } from "../../services/productService";
import { categoryService } from "../../services/categoryService";
import { productFeatureService } from "../../services/productFeatureService";
import { initialProductState } from "./productModel";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AlertOctagon } from "lucide-react";

function Create() {
  const [product, setProduct] = useState(initialProductState)
  const [category, setCategory] = useState([]);;
  const [productFeature, setProductFeature] = useState([]);;
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  //for toasting message
  const navigate = useNavigate();


  // for getting category
  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    const data = await categoryService.getAll();
    setCategory(data);
  };

  // for getting productFeature
  useEffect(() => {
    loadProductFeature();
  }, []);

  const loadProductFeature = async () => {
    const data = await productFeatureService.getAll();
    setProductFeature(data);
  };
  const createProduct = async () => {
    try {
      await productService.create(product);
      toast.success("product created successfully");
      navigate("/product");

    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
  };
const validateForm = () => {
  const newErrors = {};

  if (!product.productName?.trim()) {
    newErrors.productName = "Product name is required";
  }

  if (!product.categoryId) {
    newErrors.categoryId = "Please select category";
  }

  if (!product.quantity || Number(product.quantity) <= 0) {
    newErrors.quantity = "Quantity must be greater than 0";
  }

  if (!product.price || Number(product.price) <= 0) {
    newErrors.price = "Price must be greater than 0";
  }

  if (!product.productFeatureId) {
    newErrors.productFeatureId =
      "Please select product feature";
  }

  if (!product.description?.trim()) {
    newErrors.description =
      "Description is required";
  }

  return newErrors;
};




  const handleSubmit = async (e) => {

    e.preventDefault();

    const validationErrors =
    validateForm();

  if (
    Object.keys(validationErrors).length > 0
  ) {
    setErrors(validationErrors);
    return;
  }

  setErrors({});
    try {
      const formData = new FormData();
      formData.append("productName", product.productName);
      formData.append("categoryId", product.categoryId);
      formData.append("quantity", product.quantity);
      formData.append("price", product.price);
      formData.append("productFeatureId", product.productFeatureId);
      formData.append("isActive", product.isActive);
      formData.append("description", product.description);
      if (product.productImage) {
        formData.append("productImage", product.productImage);
      }
      await productService.create(formData);
      toast.success("Product created successfully");
      navigate("/product");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const resetForm = () => {
    setCategory(initialProductState);
    setError("");
  };

  const handleImageChange = (e) => {
    setProduct({
      ...product,
      productImage: e.target.files[0]
    });
  };
  return (
    <ProductForm
      title="Add New product"
      description="Create a new product to organize your products."
      breadcrumb="Dashboard / Product / Add product"
      product={product}
      category={category}
      productFeature={productFeature}
      error={errors}
      handleChange={handleChange}
      handleImageChange={handleImageChange}
      handleSubmit={handleSubmit}
      submitText="Save product"
      cancelAction={resetForm}
    />
  );
}
export default Create;