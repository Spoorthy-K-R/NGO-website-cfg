import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InvestorForm.css";
import HomeFooter from "../components/home-footer/HomeFooter";
import HomeNavbar from "../components/home-navbar/home-nav";

const InvestorForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [investmentInterest, setInvestmentInterest] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/investor/", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobile: mobile,
      location: location,
      investmentInterest: investmentInterest,
    });
    navigate("/investor/entrepreneur-list");
  };
  return (
    <>
      <HomeNavbar />
      <div className="sidForm">
        <div className="comp">
          <p className="head">Investor Form</p>
          <form>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              type="text"
              name="firstName"
              required
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              type="text"
              name="lastName"
              required
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email id"
              type="email"
              name="email"
              required
            />
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Mobile Number"
              type="tel"
              name="mobile"
              required
            />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              type="text"
              name="location"
              required
            />
            <input
              value={investmentInterest}
              onChange={(e) => setInvestmentInterest(e.target.value)}
              placeholder="Investment Interest"
              type="text"
              name="investmentInterest"
              required
            />

            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <HomeFooter />
    </>
  );
};

export default InvestorForm;
