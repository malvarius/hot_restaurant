var express = require('express');
var path = require('path');

var app = express();

var PORT = process.env.PORT||3000||8080;

// variables for holding reservations

var waitlist = [];
var reservations = [
  {
    name: 'Bob Ross',
    phoneNumber: '555-867-5309',
    email: 'bobross@happylittleclouds.com',
    uniqueId: 'fluffypuppy'
  },
  {
    name: 'Phil Kessel',
    phoneNumber: '555-867-7777',
    email: 'philkessel@gmail.com',
    uniqueId: '123123'
  },
  {
    name: 'Thao',
    phoneNumber: '555-867-9987',
    email: 'thao@thao.org',
    uniqueId: 'kipling123'
  }
]

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});
app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});
app.post("/api/tables",function(req,res){
  if (reservations.length<4){
  reservations.push(req.body);
  }else{
    waitlist.push(req.body);
  }
})




app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });