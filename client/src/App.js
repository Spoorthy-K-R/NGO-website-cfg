import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CompanyForm from "./pages/CompanyForm";
import StudentForm from "./pages/StudentForm";
import EntrepreneurForm from "./pages/EntrepreneurForm";
import InvestorForm from "./pages/InvestorForm";
import CompanyList from "./pages/CompanyList";
import CompanyDetail from "./pages/CompanyDetail";
import StudentList from "./pages/StudentList";
import StudentDetail from "./pages/StudentDetail";
import InvestorList from "./pages/InvestorList";
import InvestorDetail from "./pages/InvestorDetail";
import EntrepreneurList from "./pages/EntrepreneurList";
import EntrepreneurDetail from "./pages/EntrepreneurDetail";
import { userInputs } from "./formSource";
import Admin from "./pages/admin/Admin";
import Student from "./pages/student/Student";
import Entrepreneur from "./pages/entrepreneur/Entrepreneur";
import Company from "./pages/company/Company";
import Investor from "./pages/investor/Investor";
import New from "./pages/new/New";
import AboutUs from "./pages/about/AboutUs";
import AdminLogin from "./pages/admin-login/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="/student">
            <Route index element={<StudentForm />} />
            <Route path="company-list" element={<CompanyList />} />
            <Route path=":companyId" element={<CompanyDetail />} />
          </Route>

          <Route path="/company">
            <Route index element={<CompanyForm />} />
            <Route path="student-list" element={<StudentList />} />
            <Route path=":studentId" element={<StudentDetail />} />
          </Route>

          <Route path="/entrepreneur">
            <Route index element={<EntrepreneurForm />} />
            <Route path="investor-list" element={<InvestorList />} />
            <Route path=":investorId" element={<InvestorDetail />} />
          </Route>

          <Route path="/investor">
            <Route index element={<InvestorForm />} />
            <Route path="entrepreneur-list" element={<EntrepreneurList />} />
            <Route path=":entrepreneurId" element={<EntrepreneurDetail />} />
          </Route>
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin">
            <Route index element={<Admin />} />

            <Route path="student" element={<Student />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
            <Route path="entrepreneur" element={<Entrepreneur />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
            <Route path="investor" element={<Investor />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
            <Route path="company" element={<Company />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
