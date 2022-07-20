import React from "react";
import { Grid } from "@mui/material";
import cardData from "../data/cardData.json";
import CardContainer from "../components/Card.js";
import "./Home.css";
import HomeNavbar from "../components/home-navbar/home-nav";
import HomeFooter from "../components/home-footer/HomeFooter";

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <div className="home-container">
        <h1 className="welcome">Welcome to Sobus!</h1>
        <Grid item xs={2} className="homeGrid">
          {cardData.map((item) => (
            <CardContainer
              key={item.id}
              title={item.title}
              description={item.description}
              link={item.link}
              image={item.image}
            />
          ))}
        </Grid>
      </div>
      <HomeFooter />
    </>
  );
};

export default Home;
