import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { label: "Projects", to: "/projects" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

const Appbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar sx={{ backgroundColor: "#2C2C30" }}>
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-start",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              sx={{ display: { xs: "none", sm: "flex" } }}
              color="inherit"
              onClick={() => navigate("/")}
            >
              <HomeIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => navigate(item.to)}
                sx={{ color: "#fff" }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            onClick={() => navigate("/")}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#2C2C30",
            },
          }}
        >
          <Box
            onClick={handleDrawerToggle}
            sx={{
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography variant="h6" sx={{ my: 2 }}>
              Menu
            </Typography>
            <Divider />
            <List>
              {navItems.map((item) => (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton
                    onClick={() => navigate(item.to)}
                    sx={{ textAlign: "center" }}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
    </>
  );
};

export default Appbar;
