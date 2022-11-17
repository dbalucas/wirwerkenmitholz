import * as React from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../utils/icons/wwmh-icon.png";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import "./AppBar.css";
import { pages } from "../utils/constants";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activeButton, setActiveButton] = React.useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const changeActiveButton = (page) => {
    setActiveButton(page);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#4feb34",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100vw",
        padding: "0 20px",
      }}
    >
      <img src={Logo} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {pages.map((page) => (
          <NavLink
            to={`/${page.toLowerCase()}`}
            style={{ textDecoration: "none" }}
          >
            <Button
              key={page}
              onClick={() => {
                changeActiveButton(page);
                handleCloseNavMenu();
              }}
              sx={{
                my: 2,
                color: activeButton === page ? "black" : "white",
                display: "block",
              }}
            >
              {page}
            </Button>
          </NavLink>
        ))}
      </Box>
      {/* <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <p>Paul + Lena</p>
          </div>
          <div>
           
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                width: "500px",
                justifyContent: "space-between",
              }}
            >
              {pages.map((page) => (
                <NavLink
                  to={`/${page.toLowerCase()}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    key={page}
                    onClick={() => {
                      changeActiveButton(page);
                      handleCloseNavMenu();
                    }}
                    sx={{
                      my: 2,
                      color: activeButton === page ? "black" : "white",
                      display: "block",
                    }}
                  >
                    {page}
                  </Button>
                </NavLink>
              ))}
            </Box> 

             <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <NavLink
                    to={`/${page.toLowerCase()}`}
                    style={{ textDecoration: "none" }}
                  >
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" sx={{ color: "black" }}>
                        {page}
                      </Typography>
                    </MenuItem>
                  </NavLink>
                ))}
              </Menu>
            </Box> 
          </div>
        </Toolbar>
      </Container> */}
    </AppBar>
  );
};
export default ResponsiveAppBar;
