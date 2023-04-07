import React from "react";
import { Button,ButtonProps } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { styled } from "@mui/material/styles";


const StyledButton = styled(Button)({
  minWidth: "200px",
  minHeight: "60px",
  "&:focus": {
    outline: "none",
  },
});
interface MyButtonProps extends ButtonProps {
    onClickEvent?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  }


const LoginButton: React.FC<MyButtonProps>  = ({ onClickEvent, ...rest }) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClickEvent) {
          onClickEvent(e);
        }
      };
  return (
    <StyledButton variant="contained" autoFocus onClick={handleClick} startIcon={<LockOutlinedIcon />}>
      LogIn to Apps
    </StyledButton>
  );
};

export default LoginButton;
