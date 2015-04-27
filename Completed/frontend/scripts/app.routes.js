/*
* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license at the bottom of this file.
*/

angular.module('routes', ['ngRoute', 'AdalAngular'])

// Configure the routes.
.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function($routeProvider, $httpProvider, adalProvider) {	
	$routeProvider
		.when('/', {
			templateUrl: 'views/home/home.html',
			controller: 'homeController',
			controllerAs: 'home',
    	requireADLogin: true 
		})

		.otherwise({ 
			redirectTo: '/' 
		});

	  // The endpoints here are resources for cross origin requests.
	  var endpoints = {   
	    'https://outlook.office365.com': 'https://outlook.office365.com'
	  };
	  
	  // Initialize the ADAL provider with your tenant name and clientID (found in the Azure Management Portal).
	  adalProvider.init(
	  {
	    tenant: '{your_subdomain}.onmicrosoft.com',
	    clientId: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
	    endpoints: endpoints,
	    cacheLocation: 'localStorage' // Enable this for IE, as sessionStorage does not work for localhost.
	  },
	  $httpProvider
	  );
}]);

// *********************************************************
//
// O365-JavaScript-GetStarted, https://github.com/OfficeDev/O365-JavaScript-GetStarted
//
// Copyright (c) Microsoft Corporation
// All rights reserved.
//
// MIT License:
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
// *********************************************************