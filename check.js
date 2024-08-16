const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/result", async (req, res) => {
  const cursor = req.query.cursor || ""; // this gets the cursor from the query string and if none is provided it uses an empty string
  console.log("Fetching data with cursor:", cursor); 
  try {
    const response = await axios.post(
      "https://flag-gilt.vercel.app/api/challenge",
      {cursor},
      {
        headers: {
          Authorization: "Bearer uM0M7uypyeeHZ741XIrs9KsFOUEhxUdtXJA=",
        },
        params: {
          cursor, 
        },
      }
    );
    
    // console.log("Response data:", response.data); 
    res.json(response.data);
  } catch (error) {
    // console.error("Error found:", error);
    res
      .status(error.response?.status || 500)
      .send("Error fetching data: " + (error.response?.data || error.message));
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
