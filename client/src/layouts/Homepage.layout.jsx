import React from 'react'
import Navbar from "../components/Navbar";
import FoodTab from "../components/FoodTab";

const HomepageLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <Navbar/>
        <FoodTab />
        <div className="container mx-auto ">
          <Component {...props} />
        </div>
      </>
    );
  };

export default HomepageLayout;