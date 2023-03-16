import React, { useState, lazy, Suspense } from "react";
import {
  Autocomplete,
  Box,
  Container,
  Grid,
  InputAdornment,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { FlexContainer } from "../Styling/CustomStyling.js";
import SearchIcon from "@mui/icons-material/Search";
import ThaiTeaSwiggle2 from "../Images/art/Thai_Tea_Swiggle_2.png";
const MajorCard = lazy(() => import("./MajorCard.js"));
const MajorCareerList = lazy(() => import("./MajorCareerList.js"));
const GuideSidebar = lazy(() => import("./GuideSidebar.js"));

function CareerGuide() {
  const filters = ["A to Z", "Z to A"];
  const [selection, setSelection] = useState("Majors");
  const handleChoice = (event, newSelection) => {
    if (newSelection !== null) {
      setSelection(newSelection);
    }
  };

  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Grid
        container
        sx={{
          paddingTop: "7.5rem",
          minHeight: "100vh",
          width: "100%",
          paddingX: {
            xs: "0",
            sm: "0",
            md: "5rem",
          },
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Grid
          item
          xs={11}
          sm={11}
          md={8}
          sx={{
            position: "relative",
            margin: "0 auto",
          }}
        >
          <FlexContainer
            sx={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <FlexContainer
              sx={{
                marginX: "0",
                paddingTop: "2rem",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                },
              }}
            >
              <Typography variant="CustomHeading1">Majors/Careers</Typography>
              <Typography
                variant="CustomSubHeading"
                sx={{
                  marginLeft: {
                    xs: "0",
                    sm: "0",
                    md: "5rem",
                  },
                }}
              >
                Explore majors, careers, and jobs
              </Typography>
            </FlexContainer>
            <Container
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                },
                alignItems: {
                  sm: "flex-start",
                  md: "center",
                },
                justifyContent: "space-between",
                marginY: "3rem",
              }}
            >
              <ToggleButtonGroup
                value={selection}
                exclusive
                aria-label="major or career"
                onChange={handleChoice}
              >
                <ToggleButton
                  variant="customToggleStyle"
                  value="Majors"
                  disableRipple
                >
                  <Typography variant="CustomHeading3">Majors</Typography>
                </ToggleButton>
                <ToggleButton variant="customToggleStyle" value="Careers">
                  <Typography variant="CustomHeading3">Careers</Typography>
                </ToggleButton>
              </ToggleButtonGroup>
              <TextField
                id="filled-search"
                type="search"
                sx={{
                  "& .MuiInputBase-input": { padding: "6px" },
                  paddingY: "1.5rem",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  style: {
                    borderRadius: "30px",
                  },
                }}
              />
            </Container>
            <FlexContainer
              sx={{
                justifyContent: "space-between",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                },
                alignItems: {
                  xs: "flex-start",
                  sm: "flex-start",
                  md: "row",
                },
              }}
            >
              <Typography display="inline" variant="CustomHeading3">
                Major Result
              </Typography>
              <Container sx={{ margin: "0", width: "auto" }}>
                <Typography variant="CustomSubHeading">Sort By:</Typography>
                <Autocomplete
                  sx={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    width: "125px",
                    margin: "0",
                    "& .MuiFormControl-root": {
                      paddingLeft: "1.50rem",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& .MuiOutlinedInput-root .MuiAutocomplete-endAdornment": {
                      right: "20px",
                    },
                    "& .MuiButtonBase-root": {
                      width: "100px",
                      borderRadius: "0",
                      justifyContent: "flex-end",
                      transform: "none",
                    },
                  }}
                  disableClearable
                  defaultValue="A to Z"
                  id="filter_Search"
                  options={filters}
                  autoHighlight
                  renderInput={(params) => <TextField {...params} />}
                />
              </Container>
            </FlexContainer>
            <MajorCard />
            <MajorCareerList />
            <Box
              sx={{
                position: "absolute",
                zIndex: "-5",
                transform: "rotate(53deg)",
                bottom: "-35%",
                left: "-5%",
                width: "450px",
                height: "450px",
              }}
            >
              <img
                src={ThaiTeaSwiggle2}
                alt="Thai_Tea_Swiggle_2"
                width="450px"
                height="450px"
              />
            </Box>
          </FlexContainer>
        </Grid>
        <Grid item xs={11} sm={11} md={4}>
          <GuideSidebar />
        </Grid>
      </Grid>
    </Suspense>
  );
}

export default CareerGuide;
