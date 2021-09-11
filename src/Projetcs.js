import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

function Projetcs() {
  return (
    <div
      id="Projetcs"
      className="h-screen w-full bg-projects-bg grid place-content-center"
    >
      <a
        className="flex justify-center items-center pr-1 border-2 border-black rounded  hover:border-gray-500 hover:text-white hover:bg-black font-bold"
        href="https://github.com/medkalil?tab=repositories"
        target="_blank"
      >
        <GitHubIcon className="m-3" /> Follow @medkalil
      </a>
    </div>
  );
}

export default Projetcs;
