import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HomeFooter from "../components/home-footer/HomeFooter";
import HomeNavbar from "../components/home-navbar/home-nav";

const EntrepreneurList = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    const SERVER_URL = "http://localhost:8000";
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${SERVER_URL}/api/entrepeneur-all/`);
        setCompanies(res.data);
        console.log(res.data);
      } catch (err) {}
    };
    fetchCompanies();
  }, []);

  const getCompanies = () => {
    let list = [];
    let result = [];
    companies.map((company) => {
      return list.push(
        <div>
          <p>
            <Link to={`/investor/${company.id}`}>{company.firstName}</Link>
          </p>
        </div>
      );
    });

    for (let i = 0; i < list.length; i += 2) {
      result.push(
        <div key={i}>
          <div>{list[i]}</div>
          <div>{list[i + 1] ? list[i + 1] : null}</div>
        </div>
      );
    }
    return result;
  };

  return (
    <>
      <HomeNavbar />
      <div className="sid">
        <div className="container center">
          <div className="card">
            <h2>List of Entrepeneur</h2>
            <hr />
            <div>{getCompanies()}</div>
          </div>
        </div>
      </div>{" "}
      <HomeFooter />
    </>
  );
};

export default EntrepreneurList;
