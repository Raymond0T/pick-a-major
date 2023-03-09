import React from "react";
import { FlexContainer, PrimaryBtn } from "../Styling/CustomStyling.js";
import { Box, Typography } from "@mui/material";

function GuideSidebar() {
  return (
    <FlexContainer sx={{ flexDirection: "column" }}>
      <Box sx={{ width: "60%", textAlign: "center" }}>
        <FlexContainer>
          <Typography variant="CustomTitle">Major Guide</Typography>
        </FlexContainer>
        <FlexContainer>
          <Typography variant="CustomHeading2">
            Explore majors, careers, & more
          </Typography>
        </FlexContainer>
      </Box>
      <PrimaryBtn disabled sx={{ backgroundColor: "#9EA0B1" }}>
        <Typography variant="CustomHeading2">Take the Quiz</Typography>
      </PrimaryBtn>
    </FlexContainer>
  );
}

export default GuideSidebar;
