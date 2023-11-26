import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CategorySelection from "./component/CategorySelection";
import Pagination from "./component/Pagination";
import SortButtons from "./component/SortButtons";
import PhotoGrid from "./component/PhotoGrid";
import PhotoInfoModal from "./component/PhotoInfoModal";
import { Box } from "@mui/material";

const App = () => {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState("sports");
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/images?category=${category}&page=${currentPage}&sortBy=${sortBy}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category, currentPage, sortBy]);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => {
      const totalPages = Math.ceil(data?.totalHits / 9) || 1;
      const nextPage = prevPage + 1;
      return nextPage <= totalPages ? nextPage : prevPage;
    });
  };
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };
  const closePhotoInfo = () => {
    setSelectedPhoto(null);
  };
  const handleSortByLikes = () => {
    setSortBy("likes");
  };
  const handleSortByDownloads = () => {
    setSortBy("downloads");
  };
  return (
    <div className="App">
      <h1>Home Assignment - MSApps </h1>
      <Box sx={{ mb: "22px" }}>
        <CategorySelection category={category} setCategory={setCategory} />
      </Box>
      <Pagination
        currentPage={currentPage}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
        totalPages={Math.ceil(data?.totalHits / 9) || 1}
      />
      <SortButtons
        handleSortByLikes={handleSortByLikes}
        handleSortByDownloads={handleSortByDownloads}
      />
      <hr />
      <Box sx={{ alignItems: "center" }}>
        <PhotoGrid data={data} handlePhotoClick={handlePhotoClick} />
        {selectedPhoto && (
          <PhotoInfoModal
            selectedPhoto={selectedPhoto}
            closePhotoInfo={closePhotoInfo}
          />
        )}
      </Box>
    </div>
  );
};

export default App;
