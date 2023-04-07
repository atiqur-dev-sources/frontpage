import React from "react";
import { Button } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)({
  minWidth: "200px",
  minHeight: "60px",
  "&:focus": {
    outline: "none",
  },
});

const LoginButton = () => {
  return (
    <StyledButton variant="contained" autoFocus  startIcon={<LockOutlinedIcon />}>
      LogIn to Apps
    </StyledButton>
  );
};

export default LoginButton;
