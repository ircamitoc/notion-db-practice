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
  const name = req.body.name;
  const phoneNumber = req.body.phoneNumber;
  const extraInfo = req.body.extraInfo;

  try {
    const response = await notion.pages.create({
      parent: { database_ID: databaseID },
      properties: {
        Name: {
          rich_text: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        "Phone Number": {
          rich_text: [
            {
              text: {
                content: phoneNumber,
              },
            },
          ],
        },
        "Extra Information": {
          rich_text: [
            {
              text: {
                content: extraInfo,
              },
            },
          ],
        },
      },
    });
    console.log(response);
    console.log("SUCCESS!");
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, HOST, () => {
  console.log("Starting proxy at " + HOST + ":" + PORT);
});
