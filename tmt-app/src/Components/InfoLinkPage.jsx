import {
  Container,
  Typography,
  Grid,
  Card,
  List,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { MAJORS_LIST, CAREERS_LIST } from "../utils/constants";
import Breadcrumb from "./Breadcrumb";
import BobaIcon from "../Images/icons/boba.svg";
import { Link } from "@mui/material";
import { cardTitle } from "../utils/functions";

function MajorPage() {
  const params = useParams();
  const data = params.major
    ? MAJORS_LIST[params.major]
    : CAREERS_LIST[params.career];
  const resources = [
    {
      name: "BobaTalks Resource Hub",
      link: "https://bobatalks.com/resources/",
    },
    {
      name: "BobaTalks Discord Server",
      link: "https://discord.com/invite/bobatalks",
    },
    ...(params.career
      ? [
          {
            name: "Career Information via Zippia",
            link: data.link,
          },
        ]
      : []),
  ];
  let sectionInfo = params.major
    ? [
        {
          title: cardTitle(data.name, "Major"),
          color: "BobaBeige.main",
          info: data.desc,
        },
        {
          title: "Classes",
          color: "BobaPink.main",
          info: data.classes,
        },
        {
          title: `What skills do those in ${data.name} have?`,
          color: "Lavender.main",
          info: data.skills,
        },
        {
          title: "Careers",
          color: "BobaBeige.main",
          info: data.careers,
        },
      ]
    : [
        {
          title: cardTitle(data.name, "Career"),
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
          { label: `${data.name} ${params.major ? "(Major)" : "(Career)"}` },
        ]}
      />
      <Typography
        variant="h1"
        sx={{
          margin: "2rem auto",
          textAlign: "center",
        }}
      >
        {data.name} {params.major ? "(Major)" : "(Career)"}
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
                          >
                            <Typography variant="body">{item}</Typography>
                          </ListItemText>
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
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              boxShadow: "none",
              backgroundColor: "Avacado.main",
              height: "100%",
              boxSizing: "border-box",
            }}
          >
            <Typography variant="h3" sx={{ paddingBottom: "1.5rem" }}>
              Any extra resources?
            </Typography>
            <Typography variant="body">
              <List>
                {resources.map((resource, index) => {
                  return (
                    <Container
                      key={`${resource.name}-${index}`}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        margin: "0.75rem 0",
                      }}
                    >
                      <ListItemIcon>
                        <img src={BobaIcon} alt="Boba Icon" />
                      </ListItemIcon>
                      <Link
                        href={resource.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        sx={{
                          color: "Boba.main",
                          textDecoration: "underline",
                        }}
                      >
                        <Typography variant="body">{resource.name}</Typography>
                      </Link>
                    </Container>
                  );
                })}
              </List>
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MajorPage;
