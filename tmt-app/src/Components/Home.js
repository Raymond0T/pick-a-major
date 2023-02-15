import React from "react";
import "../Styling/Home.css";
import { PrimaryBtn, FlexContainer } from "../Styling/CustomStyling.js";
import { Link, Container, Typography } from "@mui/material";
import MilkTeaBlob from "../Images/MilkTeaBlob.png";
import LycheeRectangle from "../Images/LycheeRectangle.png";
import MilkTeaSwiggle2 from "../Images/MilkTeaSwiggle2.png";
import ThaiTeaSwiggle1 from "../Images/ThaiTeaSwiggle1.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Breadcrumb from "./Breadcrumb";
import { Link as RouterLink } from "react-router-dom";

function Home() {
  return (
    <Container
      sx={{
        minWidth: "100%",
        paddingTop: "7.5rem",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      <Breadcrumb />
      <FlexContainer sx={{ paddingY: "6.25rem" }}>
        <Container
          sx={{
            position: "absolute",
            top: "0",
            zIndex: "-3",
            minWidth: "1585px",
            paddingY: "2rem",
          }}
        >
          <img
            className="Home_Hero_Background"
            src={MilkTeaBlob}
            alt="MilkTeaBlob"
          />
        </Container>
        <FlexContainer sx={{ flexDirection: "column", position: "none" }}>
          <Container sx={{ textAlign: "center", paddingBottom: "1.5rem" }}>
            <Typography variant="CustomTitle" sx={{ color: "Boba.main" }}>
              Can&apos;t decide between majoring in business, biology, or art?
            </Typography>
          </Container>
          <Container
            sx={{ textAlign: "center", marginY: "1.75rem" }}
            maxWidth="md"
          >
            <Typography variant="CustomHeading3">
              No one can master multiple subjects the way you do. Spend 2
              minutes with us to find the perfect major for you!
            </Typography>
          </Container>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer sx={{ flexDirection: "row", minWidth: "100%" }}>
        <FlexContainer
          sx={{
            position: "absolute",
            bottom: "-125%",
            justifyContent: "space-between",
            zIndex: "-1",
            minWidth: "100%",
          }}
        >
          <div className="Home_Button_Bg_Left">
            <img
              src={LycheeRectangle}
              className="Home_Button_Bg_Img1"
              alt="LycheeRectangle"
            />
            <img
              src={MilkTeaSwiggle2}
              className="Home_Button_Bg_Img2"
              alt="MilkTeaSwiggle2"
            />
          </div>
          <div className="Home_Button_Bg_Right">
            <img
              src={ThaiTeaSwiggle1}
              className="Home_Button_Bg_Img3"
              alt="ThaiTeaSwiggle1"
            />
          </div>
        </FlexContainer>
        <FlexContainer
          sx={{
            flexDirection: "column",
            height: "auto",
          }}
        >
          <PrimaryBtn sx={{ color: "#FFFFFF" }}>
            <Typography variant="CustomHeading2">Take the Quiz</Typography>
          </PrimaryBtn>

          <div className="Home_Button_Main_Link">
            <Link
              sx={{ color: "Boba.main" }}
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Learn more about other different majors"
              component={RouterLink}
              to="/guide"
            >
              <Typography variant="CustomSubHeading">
                See all Majors/Careers
              </Typography>
            </Link>
            <ArrowRightAltIcon
              sx={{ paddingTop: "3px", paddingLeft: "10px" }}
            />
          </div>
        </FlexContainer>
      </FlexContainer>
    </Container>
  );
}

export default Home;
