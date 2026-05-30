import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { initialCategoryState } from "./categoryModel";
import CategoryForm from "./categoryForm";
import { toast } from "react-toastify";
import { categoryService } from "../../services/categoryService";

function Edit() {

  const navigate = useNavigate();
  const { id } = useParams();

  const [category, setCategory] = useState(
    initialCategoryState
  );

  const [error, setError] = useState("");

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const data =
        await categoryService.getById(id);
      setCategory(data);
    } catch (err) {
      setError(
        "Failed to load category"
      );
    }
  };

  const handleChange = (e) => {

    const {
      name,
      value,
      type,
      checked
    } = e.target;

    setCategory({
      ...category,
      [name]:
        type === "checkbox"
          ? checked
          : value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      category.categoryName
        .trim()
        .length < 3
    ) {

      setError(
        "Category name must be at least 3 characters"
      );

      return;
    }

    setError("");

    updateCategory();
  };

  const updateCategory = async () => {

    try {

      await categoryService.update(
        id,
        category
      );

      toast.success(
        "Updated successfully"
      );

      navigate("/category");

    } catch (err) {

      setError(
        "Failed to update category"
      );

    }
  };

  return (
    <CategoryForm
      title="Update Category"
      description="Edit category to organize your products."
      breadcrumb="Dashboard / Categories / Edit Category"
      category={category}
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      submitText="Update Category"
      cancelAction={() =>
        navigate("/category")
      }
    />
  );
}

export default Edit;