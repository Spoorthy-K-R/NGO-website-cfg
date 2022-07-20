import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HomeFooter from "../components/home-footer/HomeFooter";
import HomeNavbar from "../components/home-navbar/home-nav";

const InvestorDetail = () => {
  const [company, setCompany] = useState({});

  let id = useParams();
  useEffect(() => {
    console.log(id);
    const SERVER_URL = "http://localhost:8000";
    const companyId = id.investorId;
    const fetchData = async () => {
      try {
        const res = await axios.get(`${SERVER_URL}/api/investor/${companyId}/`);
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
            <h2>
              {company.firstName} {company.lastName}
            </h2>
            <hr />
            <ul>
              <li>👉{company.email}</li>
              <li>👉{company.mobile}</li>
              <li>👉{company.location}</li>
              <li>👉{company.investment_interest}</li>
            </ul>
          </div>
        </div>
      </div>
      <HomeFooter />
    </>
  );
};

export default InvestorDetail;
