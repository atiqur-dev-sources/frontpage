import { Box, Button } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0b3d91",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        borderTop: "1px solid #fff",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", width: "50%" }}>
        <Button sx={{ color: "#fff", fontSize: "1.2rem" }}>Our Services</Button>
        <Button sx={{ color: "#fff", fontSize: "1.2rem" }}>Contact Us</Button>
        <Button sx={{ color: "#fff", fontSize: "1.2rem" }}>email us</Button>
      </Box>
    </Box>
  );
};

export default Footer;
