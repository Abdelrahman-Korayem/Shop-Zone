import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Hero from "./Hero";
import Products from "./Products";

function Home() {


  return (
    
    <>
    <Hero />

    <Products />
    </>
  );
}

export default Home;
