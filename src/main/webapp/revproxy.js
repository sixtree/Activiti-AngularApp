var connect = require('connect');
var url = require('url');
var proxy = require('proxy-middleware');
var morgan = require('morgan')
var http = require('http');

var app = connect();

app.use(morgan('combined'))

app.use('/ee', proxy(url.parse('http://localhost:8080/activiti-app/app')));
app.use('/service', proxy(url.parse('http://localhost:8080/activiti-app/api')));
app.use('/', proxy(url.parse('http://localhost:9000')));


http.createServer(app).listen(3000);
