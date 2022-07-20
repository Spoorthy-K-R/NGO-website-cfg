import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./styles/CompanyDetail.css";
import HomeFooter from "../components/home-footer/HomeFooter";
import HomeNavbar from "../components/home-navbar/home-nav";

const CompanyDetail = () => {
  const [company, setCompany] = useState({});

  let id = useParams();
  useEffect(() => {
    console.log(id);
    const SERVER_URL = "http://localhost:8000";
    const companyId = id.companyId;
    const fetchData = async () => {
      try {
        const res = await axios.get(`${SERVER_URL}/api/company/${companyId}/`);
        setCompany(res.data);
        console.log(res.data);
      } catch (err) {}
    };
    fetchData();
  }, [id]);

  return (
    <>
      <HomeNavbar />
      <div className="sid">
        <div className="container center">
          <div className="card">
            <h2>{company.companyName}</h2>
            <hr />
            <ul>
              <li>👉{company.registeredAddress}</li>
              <li>👉{company.corporateAddress}</li>
              <li>👉{company.companyDescription}</li>
              <li>👉{company.companyProfile}</li>
              <li>👉{company.numberOfEmployees}</li>
              <li>👉{company.quarterlyTurnover}</li>
            </ul>
          </div>
        </div>
      </div>
      <HomeFooter />
    </>
  );
};

export default CompanyDetail;
