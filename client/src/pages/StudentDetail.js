import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HomeFooter from "../components/home-footer/HomeFooter";
import HomeNavbar from "../components/home-navbar/home-nav";

const StudentDetail = () => {
  const [company, setCompany] = useState({});

  let id = useParams();
  useEffect(() => {
    console.log(id);
    const SERVER_URL = "http://localhost:8000";
    const companyId = id.studentId;
    const fetchData = async () => {
      try {
        const res = await axios.get(`${SERVER_URL}/api/student/${companyId}/`);
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
              <li>👉{company.experience}</li>
              <li>👉{company.interest}</li>
              <li>👉{company.linkedin}</li>
              <li>👉{company.location}</li>
            </ul>
          </div>
        </div>
      </div>
      <HomeFooter />
    </>
  );
};

export default StudentDetail;
