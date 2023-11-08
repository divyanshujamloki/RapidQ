import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#621c1c",
    padding: "10px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Box shadow
  },
  logo: {
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none",
  },
  navItems: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    gap: "10px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s ease",
    margin: 10,
    "&:hover": {
      color: "#FFC107", // Hover color
    },
  },
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <nav className={classes.navbar} style={{ margin: "10" }}>
      <Link to="/" className={classes.logo} style={{ margin: "10px" }}>
        RapidQ
      </Link>
      <ul className={classes.navItems}>
        <li>
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/close" className={classes.link} style={{ margin: "10" }}>
            Close
          </Link>
        </li>
        <li>
          <Link to="/comph" className={classes.link} style={{ margin: "10" }}>
            Comprehension
          </Link>
        </li>
        <li>
          <Link to="/drag" className={classes.link}>
            Drag & Drop
          </Link>
        </li>
      </ul>
    </nav>
  );
}
