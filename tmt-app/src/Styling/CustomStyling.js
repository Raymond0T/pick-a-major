import { styled, Button, Container, createTheme } from "@mui/material";
import { createBreakpoints } from "@mui/system";
import "@fontsource/poppins";

const breakpoints = createBreakpoints({});

export const CustomTheme = createTheme({
  palette: {
    BTMilkTea: {
      main: "#F2DAC4",
    },
    Lychee: {
      main: "#F6A794",
    },
    ThaiTea: {
      main: "#E0A878",
    },
    Matcha: {
      main: "#73956F",
    },
    RedBean: {
      main: "#732C2C",
    },
    BobaHighlight: {
      main: "#616587",
    },
    InactiveGrey: {
      main: "#5B5D6C",
    },
    InactiveGrey2: {
      main: "#9EA0B1",
    },
    Boba: {
      main: "#1B1D2E",
    },
    BobaBeige: {
      main: "#F3E8DE",
    },
    BobaPink: {
      main: "#F4D7D7",
    },
    Lavender: {
      main: "#F6F1FF",
    },
    Avocado: {
      main: "#F0F6E2",
    },
  },
  typography: {
    h1: {
      fontFamily: "Poppins",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "38px",
      [breakpoints.up("sm")]: {
        fontSize: "42px",
        lineHeight: "52px",
      },
      [breakpoints.up("lg")]: {
        fontSize: "52px",
        lineHeight: "72px",
      },
      [breakpoints.up("xl")]: {
        fontSize: "64px",
        lineHeight: "96px",
      },
    },
    h2: {
      fontFamily: "Poppins",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "22px",
      [breakpoints.up("sm")]: {
        fontSize: "26px",
        lineHeight: "28px",
      },
      [breakpoints.up("lg")]: {
        fontSize: "32px",
        lineHeight: "34px",
      },
      [breakpoints.up("xl")]: {
        fontSize: "38px",
        lineHeight: "40px",
      },
    },
    h3: {
      fontFamily: "Poppins",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "34px",
      [breakpoints.up("sm")]: {
        fontSize: "24px",
        lineHeight: "38px",
      },
      [breakpoints.up("lg")]: {
        fontSize: "28px",
        lineHeight: "42px",
      },
      [breakpoints.up("xl")]: {
        fontSize: "32px",
        lineHeight: "48px",
      },
    },
    h4: {
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
      [breakpoints.up("sm")]: {
        fontSize: "20px",
        lineHeight: "30px",
      },
      [breakpoints.up("lg")]: {
        fontSize: "24px",
        lineHeight: "36px",
      },
    },
    h5: {
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "30px",
      [breakpoints.up("lg")]: {
        fontSize: "17px",
        lineHeight: "30px",
      },
      [breakpoints.up("xl")]: {
        fontSize: "20px",
        lineHeight: "30px",
      },
    },
    h6: {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      [breakpoints.up("lg")]: {
        fontSize: "16px",
      },
      [breakpoints.up("xl")]: {
        fontSize: "16px",
      },
    },
    body: {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
    },
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
      },
    },
    MuiToggleButton: {
      variants: [
        {
          props: { variant: "customToggleStyle" },
          style: {
            color: "#1B1D2E",
            border: "none",
            borderRadius: "0",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0)",
            },
            "&.Mui-selected:hover": {
              backgroundColor: "rgba(0,0,0,0)",
            },
            "&.Mui-selected": {
              color: "#73956F",
              borderBottom: "2px solid #73956F",
              backgroundColor: "rgba(0,0,0,0)",
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          "&.MuiCard-root": {
            borderRadius: "36px",
            padding: "2.25rem",
          },
        },
      },
    },
  },
});

export const PrimaryBtn = styled(Button)({
  color: "#FFFFFF",
  backgroundColor: "#73956F",
  borderRadius: "8px",
  border: 0,
  padding: "1rem 2rem",
  "&:hover": {
    backgroundColor: "#732C2C",
  },
  [breakpoints.up("md")]: {
    padding: "1rem 3rem",
  },
  [breakpoints.up("lg")]: {
    padding: "1rem 4rem",
  },
  [breakpoints.up("xl")]: {
    padding: "1rem 5rem",
  },
});

export const FlexContainer = styled(Container)({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
