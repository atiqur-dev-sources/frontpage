import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface RememberMeProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const RememberMe = ({ checked, onChange }: RememberMeProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    onChange(checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={isChecked}
          onChange={handleChange}
          color="primary"
          size="small"
        />
      }
      label="Remember Me"
    />
  );
};

export default RememberMe;
