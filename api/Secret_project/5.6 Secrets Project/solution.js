// import express from "express";
// import axios from "axios";

// const app = express();
// const port = 3000;

// app.use(express.static("public"));

// app.get("/", async (req, res) => {
//   try {
//     // const result = await axios.get("https://secrets-api.appbrewery.com/random");

//     const result = await axios.get("https://api.api-ninjas.com/v1/facts?limit=10");
//     res.render("index.ejs", {
//       fact: result.data.fact,
//       // user: result.data.username,
//     });
//   } catch (error) {
//     console.log(error.response.data);
//     res.status(500);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

import axios from "axios";
import express from "express";
import { createRequire } from "module"; // Import createRequire from the "module" module.

const require = createRequire(import.meta.url); // Create a "require" function for CommonJS compatibility.

const app = express();
const port = 3000;

// The rest of your code remains the same.


// Define your API key here
const apiKey = "Sx6OWB9irkg8V5LU2QWVsiw4Eb4MdbuC5EgP1Cs2"; // Replace with your actual API key

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://api.api-ninjas.com/v1/facts?limit=1", {
      headers: {
        "x-api-key": apiKey, // Include your API key in the headers
      },
    });

    res.render("index.ejs", {
      facts: result.facts, // Assuming the API response contains an array of facts
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500).send("An error occurred");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

