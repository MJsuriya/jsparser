import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import * as React from "react";
import { useState } from "react";

export default function Filter() {
  const [isValid, setIsValid] = useState(true);
  const [value, setValue] = useState<string>("");
  let handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
      <InputLabel htmlFor="standard-adornment-amount">
        Start Exploring
      </InputLabel>
      <Input
        id="standard-adornment-amount"
        value={value}
        onChange={handleChange()}
        startAdornment={
          <InputAdornment position="start">
            {isValid && (
              <CheckCircleRoundedIcon color="success"></CheckCircleRoundedIcon>
            )}
            {!isValid && <ErrorRoundedIcon color="error"></ErrorRoundedIcon>}
          </InputAdornment>
        }
      />
      {value}
    </FormControl>
  );
}
