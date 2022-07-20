import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CompanyForm.css";
import HomeFooter from "../components/home-footer/HomeFooter";
import HomeNavbar from "../components/home-navbar/home-nav";

const CompanyForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [registeredAddress, setRegisteredAddress] = useState("");
  const [corporateAddress, setCorporateAddress] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [companyProfile, setCompanyProfile] = useState("");
  const [numberOfEmployees, setNumberOfEmployees] = useState("");
  const [quaterlyTurnover, setQuaterlyTurnover] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/company/", {
      companyName: companyName,
      registeredAddress: registeredAddress,
      corporateAddress: corporateAddress,
      companyDescription: companyDescription,
      companyProfile: companyProfile,
      numberOfEmployees: numberOfEmployees,
      quaterlyTurnover: quaterlyTurnover,
    });
    navigate("/company/student-list");
  };

  return (
    <>
      <HomeNavbar />
      <div className="sidForm">
        <div className="comp">
          <p className="head">Company Form</p>
          <form>
            <input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Company name"
              type="text"
              name="companyName"
              required
            />
            <input
              value={registeredAddress}
              onChange={(e) => setRegisteredAddress(e.target.value)}
              placeholder="Registered Address"
              type="text"
              name="registeredAddress"
              required
            />
            <input
              value={corporateAddress}
              onChange={(e) => setCorporateAddress(e.target.value)}
              placeholder="Corporate address"
              type="text"
              name="corporateAddress"
              required
            />
            <input
              value={companyDescription}
              onChange={(e) => setCompanyDescription(e.target.value)}
              placeholder="Company Description"
              type="text"
              name="companyDescription"
              required
            />
            <input
              value={companyProfile}
              onChange={(e) => setCompanyProfile(e.target.value)}
              placeholder="Company Profile"
              type="text"
              name="companyProfile"
              required
            />
            <input
              value={numberOfEmployees}
              onChange={(e) => setNumberOfEmployees(e.target.value)}
              placeholder="Number of employees"
              type="text"
              name="numberOfEmployees"
              required
            />
            <input
              value={quaterlyTurnover}
              onChange={(e) => setQuaterlyTurnover(e.target.value)}
              placeholder="Quaterly Turnover"
              type="text"
              name="quaterlyTurnover"
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

export default CompanyForm;
