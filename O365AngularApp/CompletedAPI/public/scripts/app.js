/*
* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license at the bottom of this file.
*/

(function () {
  angular.module('app', [
    'ngRoute',
    'AdalAngular'
  ])
	.config(config);
  // Configure the routes.
  function config($routeProvider, $httpProvider, $sceDelegateProvider, adalAuthenticationServiceProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'HomeController',
				controllerAs: 'home',
				requireADLogin: true
			})

			.otherwise({
				redirectTo: '/'
			});

		// The endpoints here are resources for cross origin requests.
		var endpoints = {
		    'https://graph.microsoft.com/': 'https://graph.microsoft.com/',
            'https://tscdev-my.sharepoint.com/' : 'https://tscdev-my.sharepoint.com/'
		};
	
		// Initialize the ADAL provider with your tenant name and clientID (found in the Azure Management Portal).
		adalAuthenticationServiceProvider.init(
			{
				tenant: 'common',
				clientId: '378540e3-8beb-489c-bba1-a0b5d7d7ae9a',
				endpoints: endpoints,
				cacheLocation: 'localStorage'
			},
			$httpProvider
			);
		$sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from sharepoint online assets domain.  Notice the difference between * and **.
    'https://*.sharepoint.com/**'
		]);

  };
})();


// *********************************************************
//
// O365-Angular-GettingStarted, https://github.com/OfficeDev/O365-Angular-GettingStarted
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
