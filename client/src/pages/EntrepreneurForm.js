import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EntrepreneurForm.css";
import HomeFooter from "../components/home-footer/HomeFooter";
import HomeNavbar from "../components/home-navbar/home-nav";

const EntrepreneurForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [startup_idea, setStartup_idea] = useState("");
  const [location, setLocation] = useState("");
  const [challenges, setChallenges] = useState("");
  const [requirements, setRequirements] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/entrepeneur/", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobile: mobile,
      startup_idea: startup_idea,
      location: location,
      challenges: challenges,
      requirements: requirements,
    });
    navigate("/entrepreneur/investor-list");
  };

  return (
    <>
      <HomeNavbar />
      <div className="sidForm">
        <div className="comp">
          <p className="head">Entrepreneur Form</p>
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
              placeholder="E-Mail"
              type="email"
              name="email"
              required
            />
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Phone Number"
              type="tel"
              name="mobile"
              required
            />
            <input
              value={startup_idea}
              onChange={(e) => setStartup_idea(e.target.value)}
              placeholder="Startup Idea"
              type="text"
              name="startup_idea"
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
              value={challenges}
              onChange={(e) => setChallenges(e.target.value)}
              placeholder="Challenges"
              type="text"
              name="challenges"
              required
            />
            <input
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              placeholder="Requirements"
              type="text"
              name="requirements"
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

export default EntrepreneurForm;
