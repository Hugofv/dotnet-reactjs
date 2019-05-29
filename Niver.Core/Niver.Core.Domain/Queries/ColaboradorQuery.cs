namespace Niver.Core.Domain.Queries
{
    public class ColaboradorQuery
    {
        public static string Cria => @"
            INSERT INTO ""colaborador"" (nome, foto, nascimento, descricao) 
            VALUES (@Nome, @Foto, @Nascimento, @Descricao)
        ";

        public static string Atualiza => @"
            UPDATE colaborador SET nome = @Nome, foto = @Foto, nascimento = @Nascimento, descricao = @Descricao WHERE uuid = @Uuid
        ";

        public static string Excluir => @"
            UPDATE colaborador SET ativo = FALSE WHERE uuid = @Uuid;
        ";

        public static string Listar => @"
            SELECT
	            col.id AS ""Id"",
	            col.uuid AS ""Uuid"",
                col.nome AS ""Nome"",
                col.descricao AS ""Descricao"",
	            col.foto AS ""Foto"",
                col.nascimento AS ""Nascimento""
            FROM ""colaborador"" col
            WHERE col.""ativo"" IS TRUE
            ORDER BY col.nome;
        ";

        public static string Filtrar(int mes, int dia) => $@"
            SELECT
                col.id AS ""Id"",
                col.uuid AS ""Uuid"",
                col.nome AS ""Nome"",
                col.descricao AS ""Descricao"",
                col.foto AS ""Foto"",
                col.nascimento AS ""Nascimento""
            FROM colaborador col
                WHERE col.ativo IS TRUE
                AND((date_part('month', col.nascimento)::int) = @Mes
            {CondicaoFiltro(mes, dia)}
                (date_part('day', col.nascimento)::int) = @Dia)
            ORDER BY col.nome;
        ";

        private static string CondicaoFiltro(int mes, int dia)
        {
            if (mes > 0 && dia > 0)
            {
                return "AND";
            }

            return "OR";
        }
    }
}