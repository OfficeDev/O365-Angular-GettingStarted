/*
* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license at the bottom of this file.
*/

'use strict';

angular.module('app.home', [])

.controller('homeController', ['$http', function($http) {
    var vm = this;

    /**
     * Pass in the resource URL that you're requesting.
     * 
     * Note: ADAL JS does not validate the token received from Azure AD. It relies on the app’s 
     * backend to do so, and until we call the backend, we don’t know if the user obtained an 
     * acceptable token. Business applications should have a server-side component for user 
     * authentication built into the web application for security reasons. Without this backend token 
     * validation, your app is susceptible to security attacks such as the confused deputy problem. 
     * Check out this blog post (http://www.cloudidentity.com/blog/2015/02/19/introducing-adal-js-v1/) 
     * for more information.
     */
    $http.get("https://outlook.office365.com/api/v1.0/me/messages")
    .success(function(data, status, headers, config) {
      console.log('HTTP request to Mail API returned successfully.');
      vm.emails = data.value;
      console.log(vm.emails);
    })
    .error(function(data, status, headers, config) {
      console.log('HTTP request to Mail API failed.');
    });
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