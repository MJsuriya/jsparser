/* eslint-disable @next/next/no-img-element */
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import RefreshIcon from "@mui/icons-material/Refresh";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Image from "next/image";
import * as React from "react";
import { useEffect, useState } from "react";
import jsGrammar from "../../grammar/jsGrammar";

export default function Filter() {
  const [isValid, setIsValid] = useState(true);
  const [value, setValue] = useState<string>("");
  const [filterString, setFilterString] = useState<string>("");
  const [showResults, setShowResults] = useState(false);

  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1643217351198-02371ed28e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Goblin",
    },
    {
      img: "https://images.unsplash.com/photo-1643217353845-7f76ed50809d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGVlJTIwbWluJTIwaG9vfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      title: "Long Ago",
    },
  ];

  useEffect(() => {
    const nearley = require("nearley");
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(jsGrammar));
    try {
      parser.feed(value.toLowerCase());
      setIsValid(true);
      setFilterString(parser.lexer.buffer);
    } catch (e: any) {
      setIsValid(false);
      setShowResults(false);
      setFilterString("Invalid filter string");
    }
  }, [value]);

  return (
    <>
      <div className="flex">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">
            Start Exploring
          </InputLabel>

          <Input
            id="standard-adornment-amount"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            startAdornment={
              <InputAdornment position="start">
                {isValid && (
                  <CheckCircleRoundedIcon color="success"></CheckCircleRoundedIcon>
                )}
                {!isValid && (
                  <ErrorRoundedIcon color="error"></ErrorRoundedIcon>
                )}
              </InputAdornment>
            }
          />
        </FormControl>
        {isValid && value && (
          <div className="p-1 cursor-pointer">
            <PlayCircleOutlinedIcon
              fontSize="large"
              color="success"
              onClick={() => {
                value.length ? setShowResults(true) : setShowResults(false);
              }}
            >
              Search
            </PlayCircleOutlinedIcon>
          </div>
        )}
        {showResults && (
          <div className="p-1 cursor-pointer">
            <RefreshIcon
              fontSize="large"
              color="info"
              onClick={() => {
                setShowResults(false);
                setValue("");
              }}
            >
              Reset
            </RefreshIcon>
          </div>
        )}
      </div>
      <div className="text-sm">{filterString}</div>

      {showResults && (
        <div className="flex flex-col justify-center">
          {itemData.map((x, index) => (
            <div className="text-center" key={index}>
              <Image src={x.img} alt={x.title} width={800} height={500} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
