import React from "react";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";

function MajorCard() {
  const dummyData = [
    {
      id: 0,
      major: "Education",
      info: "testing",
    },
    {
      id: 1,
      major: "Economics and Business",
      info: "test fdasf afas fsadf dsf dsf edsf ds fsdaf sd f asfsd fea fgdsffdsf dfasdf ds fsdafsdf fgsdaf ased fasd few gasef sWEAFGASDFAS FDFSA DFA FSADF EAFSDASD FGREAASDFG EF GRasdfga gadfaefadf asf ",
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
              backgroundColor: "BTMilkTea.main",
              borderRadius: "15px",
            }}
          >
            <CardMedia
              component="img"
              image="@mui/icons-material/ArrowRightAlt"
              alt="icon"
              sx={{
                padding: "1.5rem",
                margin: "1rem",
                height: "100px",
                minWidth: "100px",
                maxWidth: "100px",
                borderRadius: "5px",
                backgroundColor: "BobaHighlight.main",
              }}
            />
            <CardContent
              sx={{
                display: "inline-block",
                width: "100%",
                whiteSpace: "nowrap",
                padding: "2.5rem",
              }}
            >
              <Typography variant="CustomHeading1" sx={{ display: "block" }}>
                {item.major}
              </Typography>
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
                {item.info}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
}

export default MajorCard;
