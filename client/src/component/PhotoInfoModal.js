import React from "react";
import { Dialog, Typography, Button } from "@mui/material";

const PhotoInfoModal = ({ selectedPhoto, closePhotoInfo }) => {
  return (
    <Dialog open={true} onClose={closePhotoInfo}>
      <div className="photo-info-modal">
        <Typography variant="h5">Photo Information</Typography>
        <p>Views: {selectedPhoto.views}</p>
        <p>Downloads: {selectedPhoto.downloads}</p>
        <p>Collections: {selectedPhoto.collections}</p>
        <p>Likes: {selectedPhoto.likes}</p>
        <Button onClick={closePhotoInfo} variant="outlined" color="primary">
          Close
        </Button>
      </div>
    </Dialog>
  );
};

export default PhotoInfoModal;
