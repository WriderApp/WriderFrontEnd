import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

const Home = (props) => {
  const [wrider, setWrider] = useState(null);

  const URL = "http://localhost:4000/wrider/";

  const getWrider = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setWrider(data.data);
  };

  const createWrider = async (wrider) => {
    await fetch(URL, {
      method: "post",
      // What purpose does this serve?
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wrider),
    });
    getWrider();
  };

  useEffect(() => {
    getWrider()
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Index wrider={wrider} createWrider={createWrider} />} />
        <Route path="/wrider/:id" element={<Show />} />
      </Routes>
    </main>
  );
};

export default Home;
