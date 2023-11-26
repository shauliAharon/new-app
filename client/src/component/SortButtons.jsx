import React from "react";
import { Button, ButtonGroup } from "@mui/material";

const SortButtons = ({ handleSortByLikes, handleSortByDownloads }) => {
  return (
    <ButtonGroup variant="outlined">
      <Button onClick={handleSortByLikes}>Sort by Likes</Button>
      <Button onClick={handleSortByDownloads}>Sort by Downloads</Button>
    </ButtonGroup>
  );
};

export default SortButtons;
