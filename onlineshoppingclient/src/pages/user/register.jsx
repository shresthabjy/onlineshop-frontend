import React, { useState } from "react";
import UserForm from "./userForm";
import { userService } from "../../services/userService";
import { initialUserState } from "./userModel";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState(initialUserState);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  //for toasting message
  const navigate = useNavigate();

  const createUser = async () => {
    try {
      await userService.create(user);
      toast.success("user created successfully");
      navigate("/user");

    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.fullName.trim().length < 3) {
      setError("user name must be at least 3 characters");
      return;
    }
    
    setError("");
    await createUser();
  };
  const loginAction = () => {
    navigate("/login");
  };


  return (
    <UserForm
      title="Add New user"
      description="Create a new user to organize your products."
      user={user}
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      submitText="Register"
      loginAction={loginAction}
    />
  );
}
export default Register;