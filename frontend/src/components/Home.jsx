import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index.jsx";
import Show from "../pages/Show.jsx";

const Home = (props) => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/show/:id" element={<Show />} />
      </Routes>
    </main>
  );
};

export default Home;
