using System;
using System.Collections.Generic;
using System.Configuration;
using System.Globalization;
using System.IdentityModel.Tokens;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using AuthenticationContext = Microsoft.IdentityModel.Clients.ActiveDirectory.AuthenticationContext;
using System.Diagnostics;

namespace CompletedAPI.Controllers
{
   [Authorize]
   public class ValuesController : ApiController
   {

      // GET api/values/5
      public async Task<string> Get(string id)
      {
         string contentUrl = $"https://graph.microsoft.com/v1.0/me/drive/items/{id}/content";
         using (var client = new HttpClient())
         {
            var retval = await client.GetAsStringOnBehalfOfScriptUser(contentUrl);
            return retval;
         }
      }
   }

   public static class HttpClientHelper
   {
      public static async Task<string> GetAsStringOnBehalfOfScriptUser(this HttpClient client, string url, string clientId, string appKey, string aadInstance, string graphResourceId)
      {
         string accessToken = HttpContext.Current.Request.Headers["Authorization"].Replace("Bearer", "").Trim();
         var cacheSession = HttpContext.Current.Session?["cache"] as byte[];
         TokenCache tokenCache = cacheSession != null ? new TokenCache(cacheSession) : new TokenCache();

         string authority = String.Format(CultureInfo.InvariantCulture, aadInstance, "common");
         var authContext = new AuthenticationContext(authority, tokenCache);

         // In the case of a transient error, retry once after 1 second, then abandon.
         // Retrying is optional.  It may be better, to return an error immediately to the user and have the user initiate the retry.
         bool retry;
         var retryCount = 0;
         do
         {
            retry = false;
            try
            {
              AuthenticationResult result = authContext.AcquireToken(
                     graphResourceId,
                     new ClientCredential( clientId, appKey ),
                     new UserAssertion( accessToken ) );
               accessToken = result.AccessToken;
            }
            catch ( AdalException ex )
            {
               if ( ex.ErrorCode == "temporarily_unavailable" )
               {
                  // Transient error, OK to retry.
                  retry = true;
                  retryCount++;
                  Thread.Sleep( 1000 );
               }
            }
            catch ( Exception ex )
            {
               Debug.Print( ex.ToString() );
               throw;
            }

         } while (retry && (retryCount < 1));

         if (accessToken == null)
         {
            return (null);
         }

         var request = new HttpRequestMessage(HttpMethod.Get, url);
         request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
         HttpResponseMessage response = await client.SendAsync(request);
         if (response.IsSuccessStatusCode)
         {
            string responseString = await response.Content.ReadAsStringAsync();
            HttpContext.Current.Session["cache"] = tokenCache.Serialize();
            return (responseString);
         }
         // An unexpected error occurred calling the Graph API.  Return a null profile.
         return await (response.Content.ReadAsStringAsync());
      }
      public static async Task<string> GetAsStringOnBehalfOfScriptUser(this HttpClient client, string url)
      {
         return
               await
               GetAsStringOnBehalfOfScriptUser(
                     client,
                     url,
                     ConfigurationManager.AppSettings[ "ida:ClientId" ],
                     ConfigurationManager.AppSettings[ "ida:Password" ],
                     ConfigurationManager.AppSettings[ "ida:AADInstance" ],
                     "https://graph.microsoft.com/" );
      }
   }
}
