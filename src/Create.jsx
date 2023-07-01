import React, { useState } from "react";
import { addUser } from "./UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length == 0 || email.length == 0 || phone.length == 0) {
      setError(true);
    } else {
      dispatch(
        addUser({ id: users[users.length - 1].id + 1, name, email, phone })
      );
      navigate("/");
    }
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {error && name.length <= 0 ? (
            <label className="validate">Name can't be empty</label>
          ) : (
            ""
          )}
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {error && email.length <= 0 ? (
            <label className="validate">Email can't be empty</label>
          ) : (
            ""
          )}
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="enter phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {error && phone.length <= 0 ? (
            <label className="validate">Phone can't be empty</label>
          ) : (
            ""
          )}
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
