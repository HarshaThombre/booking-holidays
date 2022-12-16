import React from "react";
import Navbar from "../../componentss/navbar/Navbar";
import Header from "../../componentss/header/Header";
import "./homei.css";
import Featured from "../../componentss/featured/Featured";
import PropertyList from "../../componentss/propertyList/PropertyList";
import FeaturedProperties from "../../componentss/featuredProperties/FeaturedProperties";
import MailList from "../../componentss/mailList/MailList";
import Footer from "../../componentss/footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header type="home" />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTittle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTittle">Homes guests love </h1>
        <FeaturedProperties />
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
}
