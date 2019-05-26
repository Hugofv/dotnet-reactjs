using Niver.Core.Application.Interfaces;
using Niver.Core.Application.Services;
using Niver.Core.Domain.Interfaces;
using Niver.Core.Infrastructure.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace Niver.Core.Application.Provider
{
    public static class Providers
    {
        public static void Registro(IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped<IClienteService, ClienteService>();
            serviceCollection.AddScoped<IClienteRepository, ClienteRepository>();
        }
    }
}