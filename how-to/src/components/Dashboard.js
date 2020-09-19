import React from "react";
import AddHowToForm from "./AddHowToForm";
import HowToCard from "./HowToCard";
// do we need this { useState, useEffect, useContext } from "react" ;
// import axiosWithAuth from "../utils/axiosWithAuth";
// import { ContextProvider } from "../context/GlobalContext";

export default function Dashboard() {

  return (
    <div>
      <AddHowToForm />
      <HowToCard />
      </div>
  );
}
