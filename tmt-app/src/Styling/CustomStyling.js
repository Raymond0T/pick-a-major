import { styled, Button, Container, createTheme } from "@mui/material";

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
    Boba: {
      main: "#1B1D2E",
    },
  },
  typography: {
    CustomTitle: {
      fontFamily: "Poppins",
      fontWeight: 700,
      fontSize: "64px",
      lineHeight: "96px",
      "@media (max-width:1350px)": {
        fontWeight: 700,
        fontSize: "52px",
        lineHeight: "72px",
      },
      "@media (max-width:1050px)": {
        fontWeight: 700,
        fontSize: "42px",
        lineHeight: "52px",
      },
      "@media (max-width:750px)": {
        fontWeight: 700,
        fontSize: "32px",
        lineHeight: "38px",
      },
    },
    CustomHeading1: {
      fontFamily: "Poppins",
      fontWeight: 700,
      fontSize: "36px",
      lineHeight: "54px",
    },
    CustomHeading2: {
      fontFamily: "Poppins",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "48px",
      "@media (max-width:1350px)": {
        fontWeight: 700,
        fontSize: "28px",
        lineHeight: "42px",
      },
      "@media (max-width:1050px)": {
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: "38px",
      },
      "@media (max-width:750px)": {
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: "34px",
      },
    },
    CustomHeading3: {
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "36px",
      "@media (max-width:1350px)": {
        fontWeight: 600,
        fontSize: "20px",
        lineHeight: "30px",
      },
      "@media (max-width:750px)": {
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
    CustomSubHeading: {
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "30px",
    },
    CustomBody: {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
    },
    CustomOverline: {
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
  },
});

export const PrimaryBtn = styled(Button)({
  color: "#FFFFFF",
  backgroundColor: "#73956F",
  borderRadius: "8px",
  border: 0,
  padding: "1rem 5rem",
  "&:hover": {
    backgroundColor: "#732C2C",
  },
  "@media (max-width:1350px)": {
    padding: "1rem 4rem",
  },
  "@media (max-width:1050px)": {
    padding: "1rem 3rem",
  },
  "@media (max-width:750px)": {
    padding: "1rem 2rem",
  },
});

export const FlexContainer = styled(Container)({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
