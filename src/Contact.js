import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { IconButton } from "@material-ui/core";

function Contact() {
  return (
    <div
      id="Contact"
      className="text-white grid place-content-center bg-gray-600 h-screen pt-20 bg-contact-bg space-y-10"
    >
      <h1 className="text-center font-bold text-5xl">CONTACT</h1>
      <p className="text-lg font-bold italic ">
        Feel free to contact me at this links
      </p>
      <div>
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <LinkedInIcon />
        </IconButton>
        <IconButton>
          <GitHubIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Contact;
