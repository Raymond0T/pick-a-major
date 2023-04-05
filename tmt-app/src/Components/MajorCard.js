import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Container,
} from "@mui/material";
import { ReactComponent as EmotionalIntelligence } from "../Images/icons/emotional_intelligence.svg";

function MajorCard() {
  const dummyData = [
    {
      id: 0,
      name: "Education",
      desc: "testing",
      icon: require("../Images/icons/emotional_intelligence.svg").default,
    },
    {
      id: 1,
      name: "Economics and Business",
      desc: "test fdasf afas fsadf dsf dsf edsf ds fsdaf sd f asfsd fea fgdsffdsf dfasdf ds fsdafsdf fgsdaf ased fasd few gasef sWEAFGASDFAS FDFSA DFA FSADF EAFSDASD FGREAASDFG EF GRasdfga gadfaefadf asf ",
      icon: require("../Images/icons/chemistry.svg").default,
    },
  ];
  return (
    <Stack
      spacing={3}
      sx={{
        width: "100%",
        "&::after": {
          content: "''",
          width: "90%",
          margin: "3rem auto",
          border: "1px solid black",
        },
      }}
    >
      {dummyData.map((item) => {
        return (
          <Card
            key={item.id}
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "Matcha.main",
              borderRadius: "15px",
              color: "white",
            }}
          >
            <CardMedia
              component="img"
              image={item.icon}
              alt="icon"
              sx={{
                padding: {
                  xs: "0.25rem",
                  sm: "0.75rem",
                  lg: "1.5rem",
                },
                margin: "1rem",
                height: {
                  xs: "50px",
                  md: "100px",
                },
                width: {
                  xs: "50px",
                  md: "100px",
                },
                borderRadius: "5px",
                backgroundColor: "BobaHighlight.main",
              }}
            />
            <CardContent
              sx={{
                display: "inline-block",
                width: "100%",
                overflow: "hidden",
                whiteSpace: "nowrap",
                padding: {
                  xs: "0.75rem 1rem",
                  md: "1.50rem",
                  lg: "2rem",
                },
              }}
            >
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="CustomHeading1"
                  sx={{
                    display: "block",
                    width: "100%",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.name}
                </Typography>
                <EmotionalIntelligence />
              </Container>
              <Typography
                variant="CustomBody"
                sx={{
                  display: "block",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "60%",
                }}
              >
                {item.desc}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
}

export default MajorCard;
