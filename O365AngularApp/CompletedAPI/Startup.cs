using Microsoft.Owin;
using Owin;
[assembly:OwinStartup(typeof(CompletedAPI.Startup))]

namespace CompletedAPI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
