const express = require("express");
const { Client } = require("@notionhq/client");
const cors = require("cors");

var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

const app = express();

app.use(cors());

const PORT = 4000;
const HOST = "localhost";

const notion = new Client({
  auth: "secret_iCjbDu8ehCJ9p4g9uwCJ2yM8D8CjFqcMf1yRkeluTur",
});

const databaseId = "0ef7d571605e42a49a64485c0435318b";

app.post("/submitFormToNotion", jsonParser, async (req, res) => {
  const name = req.body.name;
  const phoneNumber = req.body.phoneNumber;
  const extraInfo = req.body.extraInfo;
  const Timestamp = req.body.Timestamp;

  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [
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

        Timestamp: {
          rich_text: [
            {
              text: {
                content: Timestamp,
              },
            },
          ],
        },
      },
    });

    console.log(response);
    console.log("SUCCESS");
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, HOST, () => {
  console.log("Starting proxy at " + HOST + ":" + PORT);
});
