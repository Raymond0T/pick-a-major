import { React, Fragment } from "react";
import { FlexContainer } from "../Styling/CustomStyling";
import { Box, Typography, Link } from "@mui/material";
import { CAREERS_AND_MAJORS } from "../utils/constants";
import { Link as RouterLink } from "react-router-dom";

function MajorCareerList() {
  return (
    <FlexContainer
      sx={{
        alignItems: "flex-start",
        marginY: "2rem",
        paddingX: "0.5rem",
        justifyContent: "space-around",
      }}
    >
      <Box sx={{ paddingX: "1rem" }}>
        <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
          Majors
        </Typography>
        <Fragment>
          {Object.values(CAREERS_AND_MAJORS.majors).map((item) => (
            <div
              key={item.id}
              style={{
                padding: "0.25rem 0",
              }}
            >
              <Link
                to={`/majors/${item.key}`}
                component={RouterLink}
                sx={{
                  color: "Boba.main",
                  textDecoration: "underline",
                  "&:hover": {
                    color: "RedBean.main",
                    fontWeight: "bold",
                  },
                  "&::after": {
                    display: "block",
                    content: `"${item.name}"`,
                    fontWeight: "bold",
                    height: "0px",
                    overflow: "hidden",
                    visibility: "hidden",
                  },
                }}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </Fragment>
      </Box>
      <Box sx={{ paddingX: "1rem" }}>
        <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
          Careers
        </Typography>
        <Fragment>
          {Object.values(CAREERS_AND_MAJORS.careers).map((item) => (
            <div
              key={item.id}
              style={{
                padding: "0.25rem 0",
              }}
            >
              <Link
                to={`/careers/${item.key}`}
                component={RouterLink}
                sx={{
                  color: "Boba.main",
                  textDecoration: "underline",
                  "&:hover": {
                    color: "RedBean.main",
                    fontWeight: "bold",
                  },
                  "&::after": {
                    display: "block",
                    content: `"${item.name}"`,
                    fontWeight: "bold",
                    height: "0px",
                    overflow: "hidden",
                    visibility: "hidden",
                  },
                }}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </Fragment>
      </Box>
    </FlexContainer>
  );
}

export default MajorCareerList;
