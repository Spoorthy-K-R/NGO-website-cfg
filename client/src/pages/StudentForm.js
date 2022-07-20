import React, { useState } from "react";
import "./StudentForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HomeFooter from "../components/home-footer/HomeFooter";
import HomeNavbar from "../components/home-navbar/home-nav";

const StudentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [experience, setExperience] = useState("");
  const [interest, setInterest] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/student/", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobile: mobile,
      experience: experience,
      interest: interest,
      linkedIn: linkedIn,
      location: location,
    });
    navigate("/student/company-list");
  };

  return (
    <>
      <HomeNavbar />
      <div className="sidForm">
        <div className="comp">
          <p className="head">Student Form</p>
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
              placeholder="Email"
              type="text"
              name="email"
              required
            />
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Mobile"
              type="text"
              name="mobile"
              required
            />
            <input
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Experience"
              type="text"
              name="experience"
              required
            />
            <input
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              placeholder="Interest"
              type="text"
              name="interest"
              required
            />
            <input
              value={linkedIn}
              onChange={(e) => setLinkedIn(e.target.value)}
              placeholder="LinkedIn Profile URL"
              type="text"
              name="linkedIn"
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

export default StudentForm;
