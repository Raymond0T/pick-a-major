import React, { useState } from "react";
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
import { FlexContainer, PrimaryBtn } from "../Styling/CustomStyling.js";
import SearchIcon from "@mui/icons-material/Search";
import MajorCard from "./MajorCard.js";
import MilkTeaSwiggle2 from "../Images/MilkTeaSwiggle2.png";
import { CareersData } from "../Data/BobaData.js";
import { AspectRatio } from "@mui/icons-material";

function CareerGuide() {
  const [selection, setSelection] = useState("Majors");
  const handleChoice = (event, newSelection) => {
    if (newSelection !== null) {
      setSelection(newSelection);
    }
  };

  const filters = ["A to Z", "Z to A"];
  return (
    <Grid
      container
      sx={{
        paddingTop: "7.5rem",
        overflow: "hidden",
        minHeight: "100vh",
        width: "100%",
        paddingX: "5rem",
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Grid item xs={8} sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            left: "10%",
            top: "-45%",
          }}
        >
          <img
            src={MilkTeaSwiggle2}
            alt="MilkTeaSwiggle2"
            style={{
              transform: "rotate(10deg)",
              width: "100%",
            }}
          />
        </Box>
        <FlexContainer
          sx={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              marginX: "0",
              paddingTop: "2rem",
            }}
          >
            <Typography variant="CustomHeading1">Majors/Careers</Typography>
            <Typography variant="CustomSubHeading" sx={{ marginLeft: "5rem" }}>
              Explore majors, careers, and jobs
            </Typography>
          </Box>
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
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
              id="filled=search"
              type="search"
              sx={{ "& .MuiInputBase-input": { padding: "6px" } }}
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
          <FlexContainer sx={{ justifyContent: "space-between" }}>
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
                id="filter"
                options={filters}
                autoHighlight
                renderInput={(params) => <TextField {...params} />}
              />
            </Container>
          </FlexContainer>
          <MajorCard />
          <Typography variant="CustomHeading3" sx={{ marginBottom: "1rem" }}>
            All Majors
          </Typography>
          {CareersData.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </FlexContainer>
      </Grid>
      <Grid item xs={4}>
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
      </Grid>
    </Grid>
  );
}

export default CareerGuide;
