var express = require("express"),
	http = require("http"),
	app = express();

//configure the app to use the client directory for static files
app.use(express.static(__dirname + "/public"));

//create the server and have it listen
http.createServer(app).listen(3000);

//set up routes
app.get("/", function (req, res) {
	res.send('./routes/index.jade');
});