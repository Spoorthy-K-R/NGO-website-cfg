import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HomeFooter from "../components/home-footer/HomeFooter";
import HomeNavbar from "../components/home-navbar/home-nav";

const EntrepreneurDetail = () => {
  const [company, setCompany] = useState({});

  let id = useParams();
  useEffect(() => {
    console.log(id);
    const SERVER_URL = "http://localhost:8000";
    const companyId = id.entrepreneurId;
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${SERVER_URL}/api/entrepeneur/${companyId}/`
        );
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
              <li>👉{company.startup_idea}</li>
              <li>👉{company.location}</li>
              <li>👉{company.challenges}</li>
              <li>👉{company.requirements}</li>
            </ul>
          </div>
        </div>
      </div>
      <HomeFooter />
    </>
  );
};

export default EntrepreneurDetail;
