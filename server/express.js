const express = require("express");
const app = express();

const port = 8080; // 3000;
/////////// USERS
const users = [
  {
    fName: "Tom",
    lName: "Milton",
    email: "thomasm1.maestas@gmail.com",
    memberSince: "02-04-2020",
    groupType: "Admin",
    media: [ 
      {
        "id": 12,
        "uniqueId": "8bf37760-93fd-4f1b-b02c-473d319621ab",
        "character": "Ori",
        "location": "Mount Gram",
        "thorinsCompany": "Bifur",
        "quote": "Where did you go to, if I may ask?' said Thorin to Gandalf as they rode along.  To look ahead,' said he.  And what brought you back in the nick of time?' Looking behind,' said he."
      } 
    ],
  },
  {
    fName: "Walter",
    lName: "White",
    email: "walter.white@gmail.com",
    memberSince: "02-04-2020",
    groupType: "Premium",
    media: [
      {
        "id": 11,
        "uniqueId": "f4f8b2f4-b714-49cc-9aed-4d918ae32ee6",
        "character": "The Great Goblin",
        "location": "Bree",
        "thorinsCompany": "Bofur",
        "quote": "There is nothing like looking, if you want to find something. You certainly usually find something, if you look, but it is not always quite the something you were after."
      },
      {
        "id": 12,
        "uniqueId": "8bf37760-93fd-4f1b-b02c-473d319621ab",
        "character": "Ori",
        "location": "Mount Gram",
        "thorinsCompany": "Bifur",
        "quote": "Where did you go to, if I may ask?' said Thorin to Gandalf as they rode along.  To look ahead,' said he.  And what brought you back in the nick of time?' Looking behind,' said he."
      }
    ],
  },
];

const media = [
  {
    "id": 11,
    "uniqueId": "f4f8b2f4-b714-49cc-9aed-4d918ae32ee6",
    "character": "The Great Goblin",
    "location": "Bree",
    "thorinsCompany": "Bofur",
    "quote": "There is nothing like looking, if you want to find something. You certainly usually find something, if you look, but it is not always quite the something you were after."
  },
  {
    "id": 12,
    "uniqueId": "8bf37760-93fd-4f1b-b02c-473d319621ab",
    "character": "Ori",
    "location": "Mount Gram",
    "thorinsCompany": "Bifur",
    "quote": "Where did you go to, if I may ask?' said Thorin to Gandalf as they rode along.  To look ahead,' said he.  And what brought you back in the nick of time?' Looking behind,' said he."
  },
  {
    "id": 13,
    "uniqueId": "a5535656-0011-42a0-a1cd-9628118acdfc",
    "character": "Radagast",
    "location": "Gondolin",
    "thorinsCompany": "Bombur",
    "quote": "May the wind under your wings bear you where the sun sails and the moon walks."
  }
];

const groot = [
  {
    "id": 1,
    "isbn": "e4b61eff-259e-4581-813e-52b3ae804a2d",
    "title": "The Wings of the Dove",
    "author": "Lonna Murphy",
    "name": "Felony & Mayhem Press",
    "type": "Legend"
  },
  {
    "id": 2,
    "isbn": "aab026e6-65a5-4e4a-a096-634c35944732",
    "title": "East of Eden",
    "author": "Len Goyette",
    "name": "Leafwood Publishers",
    "type": "Biography/Autobiography"
  }
];

// Allow cross-origin requests
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

////////  users //////////////////////////////////////////////////////////////////
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  // To prevent the ID "0" we'll simply subtract by one. This way we can query for id = 2 which will serve us 1, etc. 
  const idx = req.params.id - 1;

  if (!users[idx]) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.json(users[idx]);
});

////////// groot ////////////////////////////////////////////////////////////////////

app.get("/api/groot", (req, res) => {
  return res.json(groot);
});

app.get("/api/groot/:id", (req, res) => {
  // To prevent the ID "0" we'll simply subtract by one. This way we can query for id = 2 which will serve us 1, etc. 
  const idx = req.params.id - 1;

  if (!groot[idx]) {
    return res.status(404).json({ error: "Groot not found" });
  }

  return res.json(groot[idx]);
});

////////// media ////////////////////////////////////////////////////////////////////

app.get("/api/media", (req, res) => {
  return res.json(media);
});

app.get("/api/media/:id", (req, res) => {
  // To prevent the ID "0" we'll simply subtract by one. This way we can query for id = 2 which will serve us 1, etc. 
  const idx = req.params.id - 1;

  if (!media[idx]) {
    return res.status(404).json({ error: "Media not found" });
  }

  return res.json(media[idx]);
});
////////////////////////////////////////////
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});