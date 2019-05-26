using System;
using System.Collections.Generic;
using System.Linq;
using Dapper;
using Niver.Core.Domain.Constantes;
using Niver.Core.Domain.Entities;
using Niver.Core.Domain.Interfaces;
using Niver.Core.Domain.Queries;
using Npgsql;

namespace Niver.Core.Infrastructure.Repositories
{
    public class ColaboradorRepository : IColaboradorRepository
    {
        private readonly string _conexao;

        public ColaboradorRepository()
        {
            _conexao = Config.Conexao;
        }

        public bool Criar(Colaborador colaborador)
        {
            using (var conexao = new NpgsqlConnection(_conexao))
            {
                conexao.Open();
                using (var transacao = conexao.BeginTransaction())
                {
                    var inserir = conexao.Execute(ColaboradorQuery.Cria, new
                    {
                        colaborador.Nome,
                        colaborador.Nascimento,
                        colaborador.Descricao,
                        colaborador.Foto,
                    });

                    if (inserir > 0)
                    {
                        transacao.Commit();
                        return true;
                    }

                    transacao.Rollback();
                    return false;
                }
            }
        }

        public bool Atualizar(Colaborador colaborador, Guid uuid)
        {
            using (var conexao = new NpgsqlConnection(_conexao))
            {
                conexao.Open();
                using (var transacao = conexao.BeginTransaction())
                {
                    conexao.Execute(ColaboradorQuery.Atualiza, new
                    {
                        colaborador.Nome,
                        colaborador.Nascimento,
                        colaborador.Descricao,
                        colaborador.Foto,
                        Uuid = uuid
                    });

                    transacao.Commit();
                    return true;
                }
            }
        }

        public bool Excluir(Guid uuid)
        {
            using (var conexao = new NpgsqlConnection(_conexao))
            {
                conexao.Open();
                using (var transacao = conexao.BeginTransaction())
                {
                    var excluir = conexao.Execute(ColaboradorQuery.Excluir, new
                    {
                        Uuid = uuid
                    });

                    if (excluir > 0)
                    {
                        transacao.Commit();
                        return true;
                    }
                    transacao.Rollback();
                    return false;
                }
            }
        }

        public IList<Colaborador> Listar()
        {
            using (var conexao = new NpgsqlConnection(_conexao))
            {
                var data = conexao.Query<Colaborador>(ColaboradorQuery.Listar).ToList();

                return data;
            }
        }
    }
}