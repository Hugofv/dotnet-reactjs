using System;

namespace Niver.Core.Domain.Constantes
{
    public class Config
    {
        private static readonly string DataBaseServer = Environment.GetEnvironmentVariable("POSTGRES_HOSTNAME") ?? "localhost";
        private static readonly string DataBaseUsername = Environment.GetEnvironmentVariable("POSTGRES_USERNAME") ?? "postgres";
        private static readonly string DataBasePassword = Environment.GetEnvironmentVariable("POSTGRES_PASSWORD") ?? "root";
        private static readonly string DataBaseDatabase = Environment.GetEnvironmentVariable("POSTGRES_DATABASE") ?? "niver";
        private static readonly string DataBasePort = Environment.GetEnvironmentVariable("POSTGRES_PORT") ?? "5432";

        public static readonly string Conexao = $"Server={DataBaseServer};Port={DataBasePort};Database={DataBaseDatabase};User Id={DataBaseUsername};Password={DataBasePassword};";
    }
}