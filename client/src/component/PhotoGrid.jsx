import React from "react";
import { Card, CardMedia, Grid } from "@mui/material";

const PhotoGrid = ({ data, handlePhotoClick }) => {
  const photoGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    justifyContent: "center",
    alignItems: "center",
  };

  const photoItemStyle = {
    cursor: "pointer",
  };

  const cardMediaStyle = {
    height: 200,
    objectFit: "cover",
  };

  return (
    <div>
      {data ? (
        <Grid container spacing={2} style={photoGridStyle}>
          {data.hits.map((photo) => (
            <Grid key={photo.id} item xs={12} sm={6} md={4} lg={4}>
              <Card
                style={photoItemStyle}
                onClick={() => handlePhotoClick(photo)}
              >
                <CardMedia
                  component="img"
                  alt={photo.tags}
                  image={photo.webformatURL}
                  style={cardMediaStyle}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PhotoGrid;
