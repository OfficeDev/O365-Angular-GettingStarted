using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using System.Web.SessionState;

namespace CompletedAPI
{
   public class WebApiApplication : System.Web.HttpApplication
   {
      protected void Application_Start()
      {
         AreaRegistration.RegisterAllAreas();
         GlobalConfiguration.Configure(WebApiConfig.Register);
      }
      protected void Application_PostAuthorizeRequest()
      {
            HttpContext.Current.SetSessionStateBehavior(SessionStateBehavior.Required);     
      }
   }
}
