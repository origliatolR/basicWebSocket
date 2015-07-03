var express = require('express'),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser');

module.exports = function () {
    var app = express();

    app.use(methodOverride());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(express.static('./public'));

    require('../app/routes/index.server.routes.js')(app);

    return app;
};
