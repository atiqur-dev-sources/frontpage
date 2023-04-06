import { Box } from "@mui/material";

const Body = () => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 200px)",
        backgroundImage: "url('/background.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 sx={{ fontSize: "4rem", color: "#fff", textAlign: "center" }}>
        Welcome to Our Website
      </h1>
    </Box>
  );
};

export default Body;
