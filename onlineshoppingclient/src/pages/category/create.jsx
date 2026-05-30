import React, { useState } from "react";
import CategoryForm from "./categoryForm";
import { categoryService } from "../../services/categoryService";
import { initialCategoryState } from "./categoryModel";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Create() {
  const [category, setCategory] = useState(initialCategoryState);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  //for toasting message
  const navigate = useNavigate();

  const createCategory = async () => {
    try {
      await categoryService.create(category);
      toast.success("Category created successfully");
      navigate("/category");

    } catch (error) {

      const apiErrors =
        error.response?.data?.errors;

      if (apiErrors) {

        const firstErrorKey =
          Object.keys(apiErrors)[0];

        const firstErrorMessage =
          apiErrors[firstErrorKey][0];

        setError(firstErrorMessage);

        toast.error(firstErrorMessage);

      }
      else if (typeof error.response?.data === "string") {

        setError(error.response.data);

        toast.error(error.response.data);

      }
      else {

        setError("Unexpected error occurred");

        toast.error("Unexpected error occurred");

      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category.categoryName.trim()) {

      setError("Category name is required");

      return;
    }

    if (category.categoryName.trim().length < 3) {

      setError(
        "Category name must be at least 3 characters"
      );

      return;
    }

    const nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(category.categoryName)) {

      setError(
        "Category name can only contain letters"
      );

      return;
    }


    setError("");
    await createCategory();
  };



  const resetForm = () => {

    setCategory(initialCategoryState);

    setError("");
  };


  return (
    <CategoryForm
      title="Add New Category"
      description="Create a new category to organize your products."
      breadcrumb="Dashboard / Categories / Add Category"
      category={category}
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      submitText="Save Category"
      cancelAction={resetForm}
    />
  );
}
export default Create;