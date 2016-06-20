/** 
 * Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license at the bottom of this file.
*/

(function () {
    angular
        .module('app')
        .controller('HomeController', HomeController);



/**
   * The HomeController code.
   * File ID: 01BYWEXXKWBX5HGYIIVVFJQAAMPW2UE6Q6
   */
    function HomeController($http, $location, $log) {
        var vm = this;
    function getFromServer(fileId) {
        var request = "/api/Values?id=" + encodeURIComponent(fileId);
        $http.get(request)
            .then(function(response) {
                $log.debug('HTTP request to content API returned successfully.');
                vm.fileStuff = response.data;
            });
    }
        if ($location.search().id) {
            var id = $location.search().id;
            $http.get("https://graph.microsoft.com/v1.0/me/drive/items/" + id)
                .then(function (response) {
                    $log.debug('HTTP request to content API returned successfully.');
                    getFromServer(id);
                }, function (error) {
                    $log.error('HTTP request to content failed.');
                });
        } else {
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
            $http.get("https://graph.microsoft.com/v1.0/me/drive/root/children")
                .then(function (response) {
                    $log.debug('HTTP request to Mail API returned successfully.');
                    vm.contents = response.data.value;
                }, function (error) {
                    $log.error('HTTP request to Mail API failed.');
                });
        }
    }
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