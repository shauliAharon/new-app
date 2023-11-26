const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.get("/api/images", async (req, res) => {
  try {
    const category = req.query.category || "sports";
    const page = parseInt(req.query.page) || 1;
    const perPage = 9;
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const sortBy = req.query.sortBy || null;
    const pixabayUrl = `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}&per_page=${perPage}&page=${page}&order=${sortBy}`;

    console.log("Request:", req.url);
    console.log("Pixabay URL:", pixabayUrl);
    console.log("startIndex:", startIndex);
    console.log("endIndex:", endIndex);

    const response = await axios.get(pixabayUrl);

    const paginatedData = {
      totalHits: response.data.totalHits,
      hits: response.data.hits,
    };

    console.log("Response:", paginatedData);

    res.json(paginatedData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
