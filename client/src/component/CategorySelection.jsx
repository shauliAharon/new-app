import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const CategorySelection = ({ category, setCategory }) => {
  return (
    <div>
      <FormControl sx={{width:"30vw"}}>
        <InputLabel>Select Category</InputLabel>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          label="Select Category"
        >
          <MenuItem value="sports">Sports</MenuItem>
          <MenuItem value="work">Work</MenuItem>
          <MenuItem value="fitness">Fitness</MenuItem>
          <MenuItem value="woman">Woman</MenuItem>
          <MenuItem value="beauty">Beauty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default CategorySelection;
