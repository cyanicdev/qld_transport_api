
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

temp = fs.readFileSync('tsv/routes.json');
let f_routes = JSON.parse(temp);

temp = fs.readFileSync('tsv/shapes.json');
let f_shapes = JSON.parse(temp);

temp = fs.readFileSync('tsv/stop_times.json');
let f_stop_times = JSON.parse(temp);

temp = fs.readFileSync('tsv/stops.json');
let f_stops = JSON.parse(temp);

temp = fs.readFileSync('tsv/trips.json');
let f_trips = JSON.parse(temp);



console.log('server is starting');
let app = express();
let server = app.listen(3000, listening);

function listening() {
  console.log('listening...');
}



app.get('/agency', function (request, response) {
  let reply = JSON.stringify(f_agency, null, 2);
  response.send(reply);
});
app.get('/calendar_dates', function (request, response) {
  let reply = JSON.stringify(f_calendar_dates, null, 2);
  response.send(reply);
});
app.get('/calendar', function (request, response) {
  let reply = JSON.stringify(f_calendar, null, 2);
  response.send(reply);
});
app.get('/feed_info', function (request, response) {
  let reply = JSON.stringify(f_feed_info, null, 2);
  response.send(reply);
});
app.get('/routes', function (request, response) {
  let reply = JSON.stringify(f_routes, null, 2);
  response.send(reply);
});
app.get('/shapes', function (request, response) {
  let reply = JSON.stringify(f_shapes, null, 2);
  response.send(reply);
});
app.get('/stop_times', function (request, response) {
  let reply = JSON.stringify(f_stop_times, null, 2);
  response.send(reply);
});
app.get('/stops', function (request, response) {
  let reply = JSON.stringify(f_stops, null, 2);
  response.send(reply);
});
app.get('/trips', function (request, response) {
  let reply = JSON.stringify(f_trips, null, 2);
  response.send(reply);
});
