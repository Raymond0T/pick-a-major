import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Breadcrumb from "./Breadcrumb";
import { FlexContainer } from "../Styling/CustomStyling.js";

function CareerGuide() {
  return (
    <Container
      sx={{
        minWidth: "100%",
        paddingTop: "7.5rem",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      <FlexContainer
        sx={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginLeft: "5rem",
        }}
      >
        <Button variant="contained" color="Matcha">
          <Typography variant="CustomSubHeading" color="white">
            Back
          </Typography>
        </Button>
        <FlexContainer
          sx={{
            flexDirection: "column",
            minWidth: "auto",
            margin: "0",
          }}
        >
          <Breadcrumb />
          <Box
            sx={{
              marginX: "0",
              width: "70%",
              paddingTop: "2rem",
            }}
          >
            <Typography variant="CustomHeading1">Majors/Careers</Typography>
            <Typography variant="CustomSubHeading" sx={{ marginLeft: "5rem" }}>
              Explore majors, careers, and jobs
            </Typography>
          </Box>
        </FlexContainer>
      </FlexContainer>
    </Container>
  );
}

export default CareerGuide;
