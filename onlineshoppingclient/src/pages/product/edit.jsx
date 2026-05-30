import React, { useState, useEffect } from "react";
import ProductForm from "./productForm";
import { productService } from "../../services/productService";
import { categoryService } from "../../services/categoryService";
import { productFeatureService } from "../../services/productFeatureService";
import { initialProductState } from "./productModel";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AlertOctagon } from "lucide-react";
import { useParams } from "react-router-dom";

function Edit() {
  //getting id from edit button
  const { id } = useParams();
  const [product, setProduct] = useState(initialProductState)
  const [category, setCategory] = useState([]);;
  const [productFeature, setProductFeature] = useState([]);;
  const [error, setError] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateProduct();

  };

  const updateProduct = async () => {
  try {

    const formData = new FormData();

    formData.append("productId", product.productId);
    formData.append("productName", product.productName);
    formData.append("categoryId", product.categoryId);
    formData.append("quantity", product.quantity);
    formData.append("price", product.price);
    formData.append("productFeatureId", product.productFeatureId);
    formData.append("isActive", product.isActive);
    formData.append("description", product.description);
    formData.append("productImage", product.productImage);

  

    await productService.update(id, formData);

    toast.success("Updated successfully");
    navigate("/product");

  } catch (err) {
    setError("Failed to update product");
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

  //for edit
  //getting/saving data of category
  useEffect(() => {
    fetchProduct();
  }, []);

  //getting data of category from api
  const fetchProduct = async () => {

    try {

      const data =
        await productService.getById(id);

      setProduct(data);

    } catch (err) {

      setError(
        "Failed to load product"
      );

    }
  };
  return (

    <ProductForm
      title="Update Product"
      description="Edit product to organize your products."
      breadcrumb="Dashboard / Product / Edit Product"
      product={product}
      category={category}
      productFeature={productFeature}
      error={error}
      handleChange={handleChange}
      handleImageChange={handleImageChange}
      handleSubmit={handleSubmit}
      submitText="Update Category"
      cancelAction={() => navigate("/product")}
    />
  );
}
export default Edit;