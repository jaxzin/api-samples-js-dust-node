var express = require('express');
var dust = require('dust');
var Models = require('./models/models');
var Collections = require('./models/collections');
var headlines = require('./lib/headlines');
require('./lib/watcher').watch(dust, './templates', './public/templates', '.jst');

var app = express.createServer();
app.use(express.cookieParser());
app.listen(process.env.PORT || 8124);

//lilac.initialize(app);
headlines.initialize(app);

// Static resources
app.get('/public/*.(js|css)', function(req, res, next) {
    res.sendfile('./' + req.url);
});

app.get('/', function(req, res, next) {
    var collection = new Collections.Headlines();
    headlines.render(req, res, collection, 'index');
});

app.get('/headlines', function(req, res, next) {
    var collection = new Collections.Headlines();
    collection.model = Models.HeadlineModel;
    collection.url = 'http://api.espn.com/v1/sports/news/headlines/top?apiKey=' + process.env.espn_api_key;
//    console.log('Fetching headlines: ' + collection.url);
    collection.fetch({
        success: function(collection, response) {
            console.log("Success!!: " + collection.length);
        },
        error: function(collection, response) {
            console.log("Error!!"+ response.statusText);
        }
    });
    headlines.render(req, res, collection, 'headlines');
});