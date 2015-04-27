# Get started with Office 365 APIs in web applications (JavaScript)

**Table of contents**

* [Prerequisites](#prerequisites)
* [Register and configure the app](#configure) 
* [Run the app](#run)
* [Questions and comments](#questions-and-comments)
* [Additional resources](#additional-resources)

This sample was built for [Get started with Office 365 APIs in JavaScript web applications](https://msdn.microsoft.com/en-us/office/office365/howto/get-started-with-JavaScript-and-Office-365-APIs). You will complete the project in the *Starter* folder as you walk through the tutorial found on that page. You can find the completed project in the *Completed* folder of this repository.

Check out [Get started with Office 365 APIs in JavaScript web applications](https://msdn.microsoft.com/en-us/office/office365/howto/get-started-with-JavaScript-and-Office-365-APIs) for a complete walkthrough on creating a JavaScript web application with the Office 365 APIs. If you'd prefer to just run the completed project found in the *Completed* folder, read the rest of this README. 

<a name="prerequisites"/>
## Prerequisites

* [Set up your Office 365 development environment](https://msdn.microsoft.com/en-us/office/office365/howto/setup-development-environment).
* A registered Azure application. The application must have the following permissions:
    * Windows Azure Active Directory
        * Enable sign-on and read user's profiles.
    * Office 365 Exchange Online
        * Read users' emails.
* The registered Azure application also needs to have http://localhost:8080/ set as a reply URL and configured to allow OAuth 2.0 implicit grant flow. 

<a name="configure"/>
## Register and configure the app

1. Sign into the [Azure Management Portal](https://manage.windowsazure.com/) using your Office 365 Developer Site credentials.

2. Click the **Active Directory** node in the left column and select the directory linked to your Office 365 subscription.

3. Select the **Applications** tab and then **Add** at the bottom of the screen.

4. On the pop-up, select **Add an application my organization is developing**. Then click the arrow to continue. 

5. Choose a name for the app, such as *SimpleMailApp*, and select **Web application and/or web API** as its Type. Then click the arrow to continue.

6. The value of **Sign-on URL** is the URL where the application will be hosted. Use *http://localhost:8080/* for the sample project.

7. The value of **App ID URI** is a unique identifier for Azure AD to identify the app. You can use http://{your_subdomain}/SimpleMailApp, where {your_subdomain} is the subdomain of .onmicrosoft you specified while signing up for your Office 365 Developer Site. Then click the check mark to provision the application.

8. Once the application has been successfully added, you will be taken to the Quick Start page for the application. From here, select the **Configure** tab.

9. Scroll down to the **permissions to other applications** section and click the **Add application** button.

10. In this tutorial, we'll demonstrate how to get a user's email so add the **Office 365 Exchange Online** application. Click the plus sign in the application's row and then click the check mark at the top right to add it. Then click the check mark at the bottom right to continue.

11. In the **Office 365 Exchange Online** row, select **Delegated Permissions**, and in the selection list, choose **Read users' mail**.

12. Click **Save** to save the app's configuration.

### Configure the app to allow the OAuth 2.0 implicit grant flow

In order to get an access token for Office 365 API requests, the application will use the OAuth implicit grant flow. You need to update the application's manifest to allow the OAuth implicit grant flow because it is not allowed by default. 

1. Select the **Configure** tab of the application's entry in the Azure Management Portal. 

2. Using the **Manage Manifest** button in the drawer, download the manifest file for the application and save it to the computer.

3. Open the manifest file with a text editor. Search for the *oauth2AllowImplicitFlow* property. By default it is set to *false*; change it to *true* and save the file.

4. Using the **Manage Manifest** button, upload the updated manifest file.

<a name="run"/>
## Run the app

Open **app.routes.js** in *Completed/frontend/scripts* and replace *{your_subdomain}* with the subdomain of .onmicrosoft you specified for your Office 365 tenant and the client ID of your registered Azure application on lines 29 and 30, respectively. 

Next, install the necessary dependencies and run the project via the command line. Begin by opening a command prompt and navigating to the *Completed* folder. Once there, follow the steps below.

1. Install project dependencies by running ```npm install```.
2. Now that all the project dependencies have been installed, start the development server by running ```node server.js``` in the *Completed* folder.
3. Navigate to ```http://localhost:8080/``` using Google Chrome (because cookies are not accessible in Internet Explorer while your app is running in localhost, you'll need to use a different browser, such as Google Chrome, to test your application).

<a name="questions-and-comments"/>
## Questions and comments

- If you have any trouble running this sample, please [log an issue](https://github.com/OfficeDev/O365-JavaScript-GetStarted/issues).
- For more general feedback, send an email to [docthis@microsoft.com](mailto:docthis@microsoft.com?subject=Feedback%20on%20the%20Office%20365%20Get%20Started%20with%20JavaScript%20sample).
  
<a name="additional-resources"/>
## Additional resources

* [Get started with Office 365 APIs in JavaScript web applications](http://aka.ms/get-started-with-js)
* [Office 365 APIs documentation](http://msdn.microsoft.com/office/office365/howto/platform-development-overview)
* [Office Dev Center](http://dev.office.com/)

## Copyright
Copyright (c) 2015 Microsoft. All rights reserved.
