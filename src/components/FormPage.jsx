import styled from "styled-components";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Form = styled.form`
  display: flex;
  margin: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 3rem;
    margin-bottom: 0px;
  }
  label {
    margin-left: 5px;
  }
  .div {
    margin: 5px;
    flex-direction: column;
    display: flex;
  }
  input {
    width: 30rem;
    height: 30px;
    background: rgb(165, 170, 167);
    color: rgba(242, 249, 244, 1);
    padding: 5px;
    cursor: pointer;
    margin-bottom: 10px;
    border-radius: 10px;
    border: none;
  }
  input:hover,
  input:focus {
    background: rgba(242, 249, 244, 1);
    border: 2px solid rgba(77, 96, 96, 255);
    color: rgba(77, 96, 96, 255);
    height: 32px;
  }

  button {
    margin-top: 10px;
    width: 200px;
    border: none;
    border-radius: 10px;
    height: 35px;
    background: rgba(77, 96, 96, 255);
    color: rgb(220, 225, 230);
    cursor: pointer;
  }
  button:hover {
    background: rgb(220, 225, 230);
    color: rgba(77, 96, 96, 255);
    height: 40px;
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 2.5rem;
    }
    input {
      width: 21rem;
    }
  }
`;
const FormPage = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      localStorage.setItem("formData", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.address) {
      setError("All fields are required.");
      return;
    }

    setError("");
    navigate("/display", { state: { formData } });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Form page</h1>
      <div className="div">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="div">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="div">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          id="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
      {error && <p className="error">{error}</p>}
    </Form>
  );
};

export default FormPage;
