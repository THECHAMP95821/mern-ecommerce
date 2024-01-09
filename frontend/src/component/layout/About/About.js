import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@mui/material";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from '@mui/icons-material/Instagram';
const About = () => {
  
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              
              alt="Founder"
            />
            <Typography>Parv Malhotra</Typography>
            <Button  color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by Parv Malhotra. 
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a >
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;