/* eslint-disable @next/next/no-img-element */
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import RefreshIcon from "@mui/icons-material/Refresh";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import * as React from "react";
import { useEffect, useState } from "react";
import grammar from "../../grammar/queryGenerator";

export default function QueryGenerator() {
  const [isValid, setIsValid] = useState(true);
  const [value, setValue] = useState<string>("");
  const [filterString, setFilterString] = useState<any>(null);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const nearley = require("nearley");
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    try {
      parser.feed(value.toLowerCase());
      console.log(parser.results.toString());
      if (parser.results.toString().length > 0 || value === "") {
        setIsValid(true);
        setFilterString(parser.results.toString().split(", ,"));
      } else {
        setIsValid(false);
        setShowResults(false);
        setFilterString("Invalid filter string");
      }
    } catch (e: any) {
      setIsValid(false);
      setShowResults(false);
      setFilterString("Invalid filter string");
    }
  }, [value]);

  function getQuery(query: any) {
    if (query && query.length == 2) {
      return `SELECT * FROM ${query[query.length - 1]}`;
    } else if (query && query.length == 3) {
      if (query[query.length - 1] === "count") {
        return `SELECT COUNT(*) FROM ${query[query.length - 2]}`;
      } else {
        return `SELECT * FROM ${query[query.length - 1]} WHERE ${query[1]} = 1`;
      }
    } else if (query && query.length == 4) {
      if (query[query.length - 1] === "count") {
        return `SELECT COUNT(*) FROM ${query[query.length - 2]} WHERE ${
          query[1]
        } = 1`;
      } else {
        return `SELECT * FROM ${query[query.length - 1]} WHERE ${
          query[1]
        } = 1 AND ${query[2]} = 1`;
      }
    } else if (query && query.length == 5) {
      return `SELECT COUNT(*) FROM ${query[query.length - 2]} WHERE ${
        query[1]
      } = 1 AND ${query[2]} = 1`;
    }
  }

  return (
    <>
      <div className="flex">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">
            Frame your query here, Ex: get userinfo count (To generate query to
            get userinfo count)
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
        {showResults && (
          <div className="p-1 cursor-pointer">
            <RefreshIcon
              fontSize="large"
              color="info"
              onClick={() => {
                setShowResults(false);
                setValue("");
                setFilterString("");
              }}
            >
              Reset
            </RefreshIcon>
          </div>
        )}
      </div>
      {isValid && value && (
        <div className="text-sm text-center p-5 border border-[#145455] mt-5">
          {getQuery(filterString)}
        </div>
      )}
      {!isValid && value && (
        <div className="text-sm text-center p-5 border border-[#145455] mt-5">
          Please enter valid filters, ex: get internal active firminfo
        </div>
      )}
      {isValid && !value && (
        <div className="text-sm text-center p-5 border border-[#145455] mt-5">
          Just start typing the filters, ex: get active userinfo
        </div>
      )}

      {showResults && (
        <div>Generated query is here: {getQuery(filterString)}</div>
      )}
    </>
  );
}
