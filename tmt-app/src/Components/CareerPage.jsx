import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  List,
  ListItemText,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { CAREERS_LIST } from "../utils/constants";
import Breadcrumb from "./Breadcrumb";

function CareerPage() {
  const params = useParams();
  const data = CAREERS_LIST[params.career];

  let sectionInfo = [
    {
      title: `What is ${
        ["a", "e", "i", "o", "u"].includes(data.name[0].toLowerCase())
          ? "an "
          : "a "
      }
      ${data.name} Career?`,
      color: "BobaBeige.main",
      info: data.desc,
    },
    {
      title: "Related majors",
      color: "BobaPink.main",
      info: data.majors,
    },
    {
      title: `What skills do those in ${data.name} have?`,
      color: "Lavender.main",
      info: data.skills,
    },
  ];

  return (
    <Container sx={{ minWidth: "70%" }}>
      <Breadcrumb
        breadcrumbs={[
          { url: "/", label: "Home" },
          { label: `${data.name} (Career)` },
        ]}
      />
      <Typography
        variant="h1"
        sx={{
          margin: "2rem auto",
          textAlign: "center",
        }}
      >
        {data.name} (Career)
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ paddingX: "1rem" }}
      >
        {sectionInfo.map((item, index) => {
          return (
            <Grid item key={index} xs={12} md={6}>
              <Card
                sx={{
                  boxShadow: "none",
                  backgroundColor: `${item.color}`,
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                <Typography variant="h3" sx={{ paddingBottom: "1.5rem" }}>
                  {item.title}
                </Typography>
                <Typography variant="body">
                  {Array.isArray(item.info) ? (
                    <List
                      sx={{
                        listStyleType: "disc",
                        paddingLeft: "1.75rem",
                      }}
                    >
                      {item.info.map((item, index) => {
                        return (
                          <ListItemText
                            key={`${item.name}-${index}`}
                            sx={{ display: "list-item" }}
                            primary={
                              <Typography variant="body">{item}</Typography>
                            }
                          ></ListItemText>
                        );
                      })}
                    </List>
                  ) : (
                    item.info
                  )}
                </Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default CareerPage;
