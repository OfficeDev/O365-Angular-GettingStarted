/*
* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license at the bottom of this file.
*/

var express   	= require('express');
var app        	= express(); 
var morgan 			= require('morgan');
var path 				= require('path'); 

// Initialize variables. 
var port = process.env.PORT || 8080; 

// Configure morgan module to log all requests.
app.use(morgan('dev')); 

// Set the front-end folder to serve public assets.
app.use(express.static(__dirname + '/frontend'));

// Set up our one route to the index.html file.
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/frontend/views/index.html'));
});

// Start the server.  
app.listen(port);
console.log('Listening on port ' + port + '...'); 