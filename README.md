# Get started with Office 365 APIs in web applications (JavaScript)

**Table of contents**

* [Prerequisites](#prerequisites)
* [Configure the sample](#configure) 
* [Run the sample](#run-the-sample)
* [Questions and comments](#questions-and-comments)
* [Additional resources](#additional-resources)

This sample was built for [Get started with Office 365 APIs in JavaScript web applications](https://msdn.microsoft.com/en-us/office/office365/howto/get-started-with-JavaScript-and-Office-365-APIs). You will complete the project in the *Starter* folder as you walk through the tutorial found on that page. You can find the completed project in the *Completed* folder of this repository.

Check out [Get started with Office 365 APIs in JavaScript web applications](https://msdn.microsoft.com/en-us/office/office365/howto/get-started-with-JavaScript-and-Office-365-APIs) for a complete walkthrough on creating a JavaScript web application with the Office 365 APIs. If you'd prefer to just run the completed project found in the *Completed* folder, read the rest of this README. 

<a name="prerequisites"/>
### Prerequisites

* [Set up your Office 365 development environment](https://msdn.microsoft.com/en-us/office/office365/howto/setup-development-environment).
* A registered Azure application. The application must have the following permissions:
    * Windows Azure Active Directory
        * Enable sign-on and read user's profiles.
    * Office 365 SharePoint Online
        * Read users' files.
* The registered Azure application also needs to have http://localhost:8080/ set as a reply URL and configured to allow OAuth 2.0 implicit grant flow. 

<a name="configure"/>
### Configure the sample

Open **app.routes.js** in *Completed/frontend/scripts* and replace *{your_subdomain}* with the subdomain of .onmicrosoft you specified for your Office 365 tenant on lines 20 and 26. Also enter the client ID of your registered Azure application on line 27. 

<a name="run-the-sample"/>
### Run the sample

You will install the necessary dependencies and run the project via the command line. Begin by opening a command prompt and navigating to the *Completed* folder. Once there, follow the steps below.

1. Install project dependencies by running ```npm install```.
2. Now that all the project dependencies have been installed, start the development server by running ```node server.js``` in the *Completed* folder.
3. Navigate to ```http://localhost:8080/``` using Google Chrome (because cookies are not accessible in Internet Explorer while your app is running in localhost, you'll need to use a different browser, such as Google Chrome, to test your application).

<a name="questions-and-comments"/>
## Questions and comments

We'd love to get your feedback on this sample. You can send your questions and suggestions to us:

* In the [Issues](https://github.com/OfficeDev/O365-JavaScript-GetStarted/issues) section of this repository.
* Send us an email at [docthis@microsoft.com](mailto:docthis@microsoft.com?subject=Feedback%20on%20the%20Office%20365%20Get%20Started%20with%20Javascript%20sample).
  
<a name="additional-resources"/>
## Additional resources

* [Get started with Office 365 APIs in JavaScript web applications](http://aka.ms/get-started-with-js)
* [Office 365 APIs documentation](http://msdn.microsoft.com/office/office365/howto/platform-development-overview)
* [Office Dev Center](http://dev.office.com/)

## Copyright
Copyright (c) 2015 Microsoft. All rights reserved.
