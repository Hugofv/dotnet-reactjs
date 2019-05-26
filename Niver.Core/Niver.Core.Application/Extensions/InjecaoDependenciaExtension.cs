using Niver.Core.Application.Provider;
using Microsoft.Extensions.DependencyInjection;

namespace Niver.Core.Application.Extensions
{
    public static class InjecaoDependenciaExtension
    {
        public static void CoreDependencias(this IServiceCollection serviceCollection)
        {
            Providers.Registro(serviceCollection);
        }
    }
}
