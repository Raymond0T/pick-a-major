import React from "react";
import { FlexContainer } from "../Styling/CustomStyling.js";
import { Container, Typography } from "@mui/material";
import { CareersData, MajorsData } from "../Data/BobaData.js";

function MajorCareerList() {
  return (
    <FlexContainer
      sx={{
        alignItems: "flex-start",
      }}
    >
      <Container>
        <Typography variant="CustomHeading3" sx={{ marginBottom: "1rem" }}>
          Careers
        </Typography>
        {CareersData.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </Container>
      <Container>
        <Typography variant="CustomHeading3" sx={{ marginBottom: "1rem" }}>
          Major
        </Typography>
        {MajorsData.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </Container>
    </FlexContainer>
  );
}

export default MajorCareerList;
