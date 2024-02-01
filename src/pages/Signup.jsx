import React, { useContext } from "react";
import { useReducer } from "react";
import { signupcontext } from "../context/signup/contextsignup";

const formData = {
  email: "",
  password: "",
  city: "",
  zip: "",
  address: "",
  skills: [],
};

const form_reducer = (form_state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...form_state, [action.payload.name]: action.payload.value };
    case "TOGGLE_SKILLCHANGE":
      const skills = form_state.skills.includes(action.payload.skill)
        ? form_state.skills.filter((s) => s !== action.payload.skill)
        : [...form_state.skills, action.payload.skill];
      return { ...form_state, skills };
    default:
      return form_state;
  }
};
console.log(formData);

export default function Signup() {
  const [form_state, form_dispatch] = useReducer(form_reducer, formData);
  const { dispatch } = useContext(signupcontext);

  const handlechange = (e) => {
    form_dispatch({
      type: "UPDATE_FIELD",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleskillchange = (e) => {
    form_dispatch({
      type: "TOGGLE_SKILLCHANGE",
      payload: {
        skill: e.target.value,
      },
    });
  };

  // Update the fetch URL in your Signup component
  const handlesubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form_state),
      });
  
      if (response.ok) {
        console.log("User registered successfully");
        // Optionally, reset the form or navigate to another page
      } else {
        console.error("Failed to register user");
        // Handle the error
      }
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  
    console.log(form_state); // Corrected the case of 'console.log' and 'form_state'
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handlesubmit} className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handlechange}
              id="inputEmail4"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={handlechange}
              id="inputPassword4"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              onChange={handlechange}
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              name="address"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handlechange}
              name="city"
              id="inputCity"
            />
          </div>

          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input
              type="text"
              name="zip"
              className="form-control"
              onChange={handlechange}
              id="inputZip"
            />
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="html"
              value="HTML"
              checked={form_state.skills.includes("HTML")}
              onChange={handleskillchange}
            />
            <label htmlFor="HTML" className="form-check-label">
              HTML
            </label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="js"
              value="JS"
              name="JS"
              checked={form_state.skills.includes("JS")}
              onChange={handleskillchange}
            />
            <label htmlFor="js" className="form-check-label">
              JS
            </label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="css"
              value="CSS"
              name="CSS"
              checked={form_state.skills.includes("CSS")}
              onChange={handleskillchange}
            />
            <label htmlFor="css" className="form-check-label">
              CSS
            </label>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
