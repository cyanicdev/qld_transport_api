
let express = require('express');  //
let fs = require('fs');  // file system package

let temp = fs.readFileSync('tsv/agency.json');
let f_agency = JSON.parse(temp);

temp = fs.readFileSync('tsv/calendar_dates.json');
let f_calendar_dates = JSON.parse(temp);

temp = fs.readFileSync('tsv/calendar.json');
let f_calendar = JSON.parse(temp);

temp = fs.readFileSync('tsv/feed_info.json');
let f_feed_info = JSON.parse(temp);


console.log('server is starting');
let app = express();
let server = app.listen(3000, listening);

function listening() {
  console.log('listening...');
}



app.get('/agency', agency);
app.get('/calendar_dates', calendar_dates);
app.get('/calendar', calendar);
app.get('/feed_info', feed_info);

function agency(request, response) {
  let reply = JSON.stringify(f_agency, null, 2);
  response.send(reply);
}

function calendar_dates(request, response) {
  let reply = JSON.stringify(f_calendar_dates, null, 2);
  response.send(reply);
}

function calendar(request, response) {
  let reply = JSON.stringify(f_calendar, null, 2);
  response.send(reply);
}

function feed_info(request, response) {
  let reply = JSON.stringify(f_feed_info, null, 2);
  response.send(reply);
}

