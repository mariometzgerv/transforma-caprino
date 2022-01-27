const express   = require('express');
const path      = require('path');
const app       = express();

/*
app.use(express.static(__dirname +'/dist/transforma-caprino'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname +'/dist/transforma-caprino/index.html'));
});
*/
app.use(express.static('./dist/transforma-caprino'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: 'dist/transforma-caprino/' });
});
app.listen(process.env.PORT || 8080);