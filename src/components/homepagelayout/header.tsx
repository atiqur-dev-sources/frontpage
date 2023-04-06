import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#000" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <img src="/logo.png" alt="Logo" style={{ height: 40 }} />
        <div>
          <Button
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleClick}
            sx={{ color: "#fff", fontSize: "1.2rem", mr: 2 }}
          >
            Login
          </Button>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Login</MenuItem>
            <MenuItem onClick={handleClose}>Signup</MenuItem>
          </Menu>
          <Button sx={{ color: "#fff", fontSize: "1.2rem" }}>Our Services</Button>
          <Button sx={{ color: "#fff", fontSize: "1.2rem" }}>About Us</Button>
          <Button sx={{ color: "#fff", fontSize: "1.2rem" }}>Contact Us</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
