import React from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import { NativeSelect, FormControl } from "@material-ui/core";

import { useAppDispatch } from "../../../app/hooks";
import { fetchAsyncGetCountry } from "../covidSlice";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: 50,
    minWidth: 320,
  },
}));

const SwitchCountry: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const countries = [
    "japan",
    "china",
    "us",
    "france",
    "italy",
    "spain",
    "united kingdom",
    "germany",
    "russia",
    "brazil",
    "taiwan",
    "thailand",
    "new zealand",
    "sweden",
    "india",
  ];

  return (
    <div>
      <FormControl className={classes.formControl}>
        <NativeSelect
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            dispatch(fetchAsyncGetCountry(e.target.value))
          }
        >
          <option value="">World Wide</option>
          {countries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default SwitchCountry;
