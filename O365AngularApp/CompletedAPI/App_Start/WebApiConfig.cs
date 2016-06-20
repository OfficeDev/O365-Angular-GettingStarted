using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace CompletedAPI
{
   public static class WebApiConfig
   {
      public static string UrlPrefix => "api";
      public static string UrlPrefixRelative => "~/api";
      public static void Register(HttpConfiguration config)
      {
         // Web API configuration and services

         // Web API routes
         config.MapHttpAttributeRoutes();

         config.Routes.MapHttpRoute(
             name: "DefaultApi",
             routeTemplate: UrlPrefix + "/{controller}/{id}",
             defaults: new { id = RouteParameter.Optional }
         );
      }
   }
}
