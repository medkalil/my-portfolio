import React from "react";

function Home() {
  return (
    <div
      id="Home"
      className="w-full h-full bg-no-repeat bg-home-bg bg-no-repeat bg-cover bg-fixed"
    >
      <div className="grid place-content-center h-screen justify-items-center">
        <h1 className="text-black text-7xl font-bold ">Med Khalil Ben Hmed</h1>
        <h1 className="text-black text-2xl text-base font-bold ">
          Data Scientist & Software Developer
        </h1>
      </div>
    </div>
  );
}

export default Home;
//bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
