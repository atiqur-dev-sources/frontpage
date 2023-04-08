import React from "react";
import { Button,ButtonProps, keyframes } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { styled } from "@mui/material/styles";

const ButtonAnimation = keyframes`
0% {
  transform: scale(1);
}
50% {
  transform: scale(0.8);
}
100% {
  transform: scale(1);
}
`;
const StyledButton =styled(Button)`
background: linear-gradient(180deg, crimson, darkred);
  color: #ffffff;
  border: none;
  border-radius: 50px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 20px 50px;
  margin: 20px;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0px 5px 0px #00538c;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 8px 0px #00538c;
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;
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
