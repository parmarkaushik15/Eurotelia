//Install express server
const express = require('express');
const app = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var serverOne = 'http://136.243.170.130:8080/'

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));
app.get('/*', function(req, res){
	res.sendFile('dist/index.html', { root: __dirname });
});
app.all("/external/*", function(req, res) {
    apiProxy.web(req, res, {target: serverOne});
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8085);