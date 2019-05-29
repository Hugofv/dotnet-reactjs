using System;
using Niver.Core.Domain.Entities;
using Xunit;

namespace Niver.Core.Domain.Tests.Entities
{
    public class ColaboradorTest
    {
        private readonly Colaborador _colaborador;

        public ColaboradorTest()
        {
            _colaborador = new Colaborador();
        }

        [Fact]
        public void Id__AtribuiELeValor__DeveTerGetSet()
        {
            // Prepara e Testa
            const int id = 10;
            _colaborador.Id = id;

            // Testa e Asserta
            Assert.True(_colaborador.Id == id, "Id deve ter Get e Set");
        }

        [Fact]
        public void Uuid__AtribuiELeValor__DeveTerGetSet()
        {
            // Prepara e Testa
            var uuid = Guid.NewGuid();
            _colaborador.Uuid = uuid;

            // Testa e Asserta
            Assert.True(_colaborador.Uuid == uuid, "Uuid deve ter Get e Set");
        }

        [Fact]
        public void Nome__AtribuiELeValor__DeveTerGetSet()
        {
            // Prepara e Testa
            const string nome = "Nome";
            _colaborador.Nome = nome;

            // Testa e Asserta
            Assert.True(_colaborador.Nome == nome, "Nome deve ter Get e Set");
        }

        [Fact]
        public void Descricao__AtribuiELeValor__DeveTerGetSet()
        {
            // Prepara e Testa
            const string descricao = "Descricao";
            _colaborador.Descricao = descricao;

            // Testa e Asserta
            Assert.True(_colaborador.Descricao == descricao, "Descrição deve ter Get e Set");
        }

        [Fact]
        public void Nascimento__AtribuiELeValor__DeveTerGetSet()
        {
            // Prepara e Testa
            var nascimento = DateTime.Now;
            _colaborador.Nascimento = nascimento;

            // Testa e Asserta
            Assert.True(_colaborador.Nascimento == nascimento, "Nascimento deve ter Get e Set");
        }

        [Fact]
        public void Foto__AtribuiELeValor__DeveTerGetSet()
        {
            // Prepara e Testa
            const string foto = "Foto Base64";
            _colaborador.Foto = foto;

            // Testa e Asserta
            Assert.True(_colaborador.Foto == foto, "Foto deve ter Get e Set");
        }
    }
}