import React from "react";
import "./AboutUs.css";
import HomeNavbar from "../../components/home-navbar/home-nav";
import HomeFooter from "../../components/home-footer/HomeFooter";

const AboutUs = () => {
  return (
    <>
      <HomeNavbar />
      <div className="aboutcont">
        Sobus Insight Forum's mission is to identify and nurture passionate,
        capable social entrepreneurs, and enable ecosystems for sustainable,
        scalable, social enterprises.
        <p style={{ paddingBottom: "10px" }}>
          Sobus Insight Forum wants to achieve the vision of a SMART village by
          combining the wisdom, and inherent innovation potential of India's
          rural people and skill of its professionals. Sobus Insight Forum's
          Center of Excellence in Maharashtra is a pilot in that direction. The
          Center shall catalyze an entrepreneurship ecosystem to encourage,
          enable and support local rural innovators to solve societal problems
          at scale using technology. The Center would build the capacity of
          emerging innovators from ideation to impactful solutions by:
        </p>{" "}
        <li style={{ paddingBottom: "10px" }}>
          Providing an opportunity for local innovators and the community at
          large to innovate, ideate and design practical solutions by providing
          knowledge & mentoring, advanced tinkering space, market access,
          business networks and support services and other enablers
        </li>{" "}
        <li style={{ paddingBottom: "10px" }}>
          {" "}
          Focus on startups and MSME empowerment facilitating uptake of existing
          technologies and solutions among rural communities and across India
        </li>{" "}
        <li style={{ paddingBottom: "10px" }}>
          Engaging with tech-based social enterprises that deploy solutions
          around water and sanitation, renewable energy solutions, sustainable
          agricultural practices.
        </li>
        <p>
          As a committed changemaker, you already have a passion for impact. Now
          to take your social startup idea from zero to scale requires you to
          identify and engage effectively with the right technical experts and
          business mentors, impact investors and partners on the one hand, and
          with key stakeholders like the government, corporates, NGOs, academic
          institutions and civil society on the other. Sobus Platform is your
          partner to build that ecosystem. Faster. Better. Globally. You can
          further leverage our extended network for grassroots reach, robust
          infrastructure and critical market linkages.
        </p>
      </div>
      <HomeFooter />
    </>
  );
};

export default AboutUs;
