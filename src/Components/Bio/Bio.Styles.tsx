import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const BioParagraph = styled.p`
  @media only screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

export const BioAnchor = styled.a`
  color: #29b6f6;
  &:visited {
    color: #29b6f6;
  }
  @media only screen and (max-width: 600px) {
    color: #0264e3;
    &:visited {
      color: #0264e3;
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: 85,
    marginBottom: -15,
    fontSize: "3rem",
    textDecoration: "underline",
    backgroundImage:
      "radial-gradient(circle farthest-side at 50% 50%, #eceff1, #616161)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    fontWeight: 600,
    [theme.breakpoints.down("lg")]: {
      
    },
    [theme.breakpoints.down("md")]: {
      marginTop: 75,
      fontSize: "2.7rem",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: "3rem",
      marginTop: 100,
      marginBottom: 20,
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: 10,
      marginTop: 20,
      fontSize: "1.8rem",
      marginLeft: 0,
    },
  },
  bio: {
    fontSize: 16,
    color: "#eceff1",
    fontFamily: "system-ui, sans-serif",
    [theme.breakpoints.down("sm")]: {
      padding: "0 50px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 0 0 4%",
      textAlign: "unset",
    },
  },
}));

export default useStyles;
