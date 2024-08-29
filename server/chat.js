const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 5000;
const API_KEY = "z-6v9jO1yD/f7tT_+085_fjoaFFXV4";

app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    const systemMessage = {
      role: "system",
      content:
        "You are a chatbot specializing in heritage and cultural topics. Only provide information related to heritage, culture, traditions, history, and related subjects. Reject all other topics.",
    };

    const response = await axios.post(
      "https://cloud.olakrutrim.com/v1/chat/completions",
      {
        model: "Mistral-7B-Instruct",
        messages: [systemMessage, ...messages],
        max_tokens: 256,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching response:", error);
    res.status(500).send("Error fetching response from API.");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
