const express = require("express");
const { Client } = require("@notionhq/client");
const cors = require("cors");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

const app = express();

app.use(cors());

const PORT = 4000;
const HOST = "localhost";

const client = new Client({
  auth: "secret_uojX5Syawr3EyC61AxGettdK69s65pn9kj0gVsqcf2l",
});

const databaseID = "057fd1eb2a9c4214bc2953a8332e1d29";

// POST request
// POST name, phoneNumber, extraInfo
// Functionality: Make a database entry in a Notion page with the databaseID above
app.post("/submitFormToNotion", jsonParser, async (req, res) => {
  {
    name: "";
    phoneNumber: "";
    extraInfo: "";
  }
});

app.listen(PORT, HOST, () => {
  console.log("Starting proxy at " + HOST + ":" + PORT);
});
