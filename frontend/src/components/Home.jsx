import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

const Home = (props) => {
  const [wrider, setWrider] = useState(null);

  const URL = "http://localhost:4000/wrider/";

  //fetches all wriders from our API backend
  const getWriders = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setWrider(data.data);
  };

  const createWrider = async (wrider) => {
    //make post request to creat wriders
    await fetch(URL, {
      method: "POST",
      // What purpose does this serve?
      // A: This headers code is part of the POST request, and it tells the server what kind of data is being sent.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wrider),
    });
    // update our components list of wriders
    getWriders();
  };

  const updateWriders = async (wrider, id) => {
    // make post request to create wriders
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wrider),
    });
    //update list of wriders
    getWriders();
  };

  const deleteWriders = async (id) => {
    // make post request to delete wriders
    await fetch(URL + id, {
      method: "DELETE",
    });
    //update list of wriders
    getWriders();
  };

  useEffect(() => {
    getWriders();
  }, []);

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Index wrider={wrider} createWrider={createWrider} />}
        />
        <Route
          path="/wrider/:id"
          element={
            <Show
              wrider={wrider}
              updateWrider={updateWrider}
              deleteWriders={deleteWriders}
            />
          }
        />
      </Routes>
    </main>
  );
};

export default Home;
