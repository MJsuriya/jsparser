import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import * as React from "react";
import { useState } from "react";
import grammar from "../../grammar/grammar";

export default function Filter() {
  const [isValid, setIsValid] = useState(true);
  const [value, setValue] = useState<string>("");
  const [filterString, setFilterString] = useState<string>("");
  const nearley = require("nearley");

  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

  let handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setFilterString("");

    try {
      setIsValid(true);
      parser.feed(value);
      // setFilterString(JSON.stringify(parser.results));
    } catch (e: any) {
      setIsValid(false);
      setFilterString(e.message);
    }
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
      <div className="text-sm">{filterString}</div>
    </FormControl>
  );
}
