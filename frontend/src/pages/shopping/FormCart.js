import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const FormCart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone_number: "",
    address: "",
    note: "",
    order_date: "",
    status: "",
    total_money: "", // Initialize total_money
  });

  useEffect(() => {
    // Retrieve cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Calculate total money based on the cart items
    const totalMoney = cartItems.reduce(
      (accumulator, currentItem) => accumulator + currentItem.price * currentItem.quantity,
      0
    );

    // Update total_money in the form data
    setFormData((prevData) => ({
      ...prevData,
      total_money: totalMoney,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an HTTP POST request to your API endpoint
      const response = await fetch("http://localhost:8080/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Successful response, you can handle success logic here
        console.log("Order placed successfully!");
        // Clear the form after successful submission
        setFormData({
          fullname: "",
          email: "",
          phone_number: "",
          address: "",
          note: "",
          order_date: "",
          status: "",
          total_money: "",
        });

        // Remove cart items from localStorage
        localStorage.removeItem("cartItems");

        // Display success message to the user
        alert("Đặt hàng thành công!");

        // Redirect after successful submission
        navigate("/");
        window.location.reload();
      } else {
        // Handle errors from the server
        console.error("Error placing order:", response.status, response.statusText);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error:", error.message);
    }
  };
  return (
    <div className="container">
      <h2>Thông tin đặt hàng</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullname">Họ và tên:</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            className="form-control"
            value={formData.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone_number">Số điện thoại:</label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            className="form-control"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Địa chỉ giao hàng:</label>
          <textarea
            id="address"
            name="address"
            className="form-control"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="note">Ghi chú:</label>
          <textarea
            id="note"
            name="note"
            className="form-control"
            value={formData.note}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="order_date">Ngày đặt hàng:</label>
          <input
            type="date"
            id="order_date"
            name="order_date"
            className="form-control"
            value={formData.order_date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Trạng thái:</label>
          <input
            type="text"
            id="status"
            name="status"
            className="form-control"
            value={formData.status}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="total_money">Tổng số tiền:</label>
          <input
            type="text"
            id="total_money"
            name="total_money"
            className="form-control"
            value={formData.total_money}
            onChange={handleChange}
            readOnly // Make the input read-only
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Đặt hàng
        </button>
      </form>
    </div>
  );
};

export default FormCart;
