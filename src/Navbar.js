import { AirplanemodeActiveRounded } from "@material-ui/icons";
import React from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import pdf from "./Resumer/mon_cv.pdf";

function Navbar() {
  return (
    <div className=" fixed w-screen flex justify-between bg-transparent font-medium ">
      <h1 className="m-3">
        <NavLink activeClassName="active" smooth to="#">
          Med Khalil Ben Hmed
        </NavLink>
      </h1>
      <div className="mr-3">
        <ul className="flex ">
          <li className="m-3">
            <NavLink activeClassName="active" smooth to="#About">
              About
            </NavLink>
          </li>
          <li className="m-3">
            <NavLink activeClassName="active" smooth to="#Projetcs">
              Projetcs
            </NavLink>
          </li>
          <li className="m-3">
            <a href={pdf} type="application/pdf" target="_blank">
              Resume
            </a>
          </li>
          <li className="m-3">
            <NavLink activeClassName="active" smooth to="#Contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
