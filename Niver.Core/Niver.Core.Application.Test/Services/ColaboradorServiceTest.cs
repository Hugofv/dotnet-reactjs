using System;
using System.Collections.Generic;
using Niver.Core.Application.Services;
using Niver.Core.Domain.Entities;
using Niver.Core.Domain.Interfaces;
using Moq;
using Xunit;

namespace Niver.Core.Application.Test.Services
{
    public class ColaboradorServiceTest
    {
        private readonly Colaborador _colaborador = new Colaborador
        {
            Nome = "Nome",
            Nascimento = DateTime.Now,
            Descricao = "Descricao"
        };

        [Fact]
        public void Criar__ColaboradorValido__RetornaTrue()
        {
            // Prepara
            var mock = new Mock<IColaboradorRepository>();
            mock.Setup(colaboradorRepository => colaboradorRepository.Criar(_colaborador)).Returns(true);

            // Testa
            var service = new ColaboradorService(mock.Object);
            var retorno = service.Criar(_colaborador);

            //Valida
            Assert.True(retorno);
        }

        [Fact]
        public void Criar__ColaboradorInvalido__RetornaFalse()
        {
            // Prepara
            var mock = new Mock<IColaboradorRepository>();
            mock.Setup(colaboradorRepository => colaboradorRepository.Criar(null)).Returns(false);

            // Testa
            var service = new ColaboradorService(mock.Object);
            var retorno = service.Criar(_colaborador);

            //Valida
            Assert.False(retorno);
        }

        [Fact]
        public void Atualizar__ColaboradorValido__RetornaTrue()
        {
            // Prepara
            var mock = new Mock<IColaboradorRepository>();
            mock.Setup(colaboradorRepository => colaboradorRepository.Atualizar(_colaborador, It.IsAny<Guid>())).Returns(true);

            // Testa
            var service = new ColaboradorService(mock.Object);
            var retorno = service.Atualizar(_colaborador, It.IsAny<Guid>());

            //Valida
            Assert.True(retorno);
        }

        [Fact]
        public void Atualizar__ColaboradorInvalido__RetornaFalse()
        {
            // Prepara
            var mock = new Mock<IColaboradorRepository>();
            mock.Setup(colaboradorRepository => colaboradorRepository.Atualizar(null, Guid.Empty)).Returns(false);

            // Testa
            var service = new ColaboradorService(mock.Object);
            var retorno = service.Atualizar(null, Guid.Empty);

            //Valida
            Assert.False(retorno);
        }

        [Fact]
        public void Excluir__ColaboradorValido__RetornaTrue()
        {
            // Prepara
            var mock = new Mock<IColaboradorRepository>();
            mock.Setup(colaboradorRepository => colaboradorRepository.Excluir(It.IsAny<Guid>())).Returns(true);

            // Testa
            var service = new ColaboradorService(mock.Object);
            var retorno = service.Excluir(It.IsAny<Guid>());

            //Valida
            Assert.True(retorno);
        }

        [Fact]
        public void Excluir__ColaboradorInvalido__RetornaFalse()
        {
            // Prepara
            var mock = new Mock<IColaboradorRepository>();
            mock.Setup(colaboradorRepository => colaboradorRepository.Excluir(Guid.Empty)).Returns(false);

            // Testa
            var service = new ColaboradorService(mock.Object);
            var retorno = service.Excluir(Guid.Empty);

            //Valida
            Assert.False(retorno);
        }

        [Fact]
        public void Listar__ColaboradorsValidos__RetornaListaDeColaboradors()
        {
            // Prepara
            var mock = new Mock<IColaboradorRepository>();
            mock.Setup(colaboradorRepository => colaboradorRepository.Listar()).Returns(new List<Colaborador>
            {
                _colaborador,
                _colaborador
            });

            // Testa
            var service = new ColaboradorService(mock.Object);
            var retorno = service.Listar();

            //Valida
            Assert.IsType<List<Colaborador>>(retorno);
        }

        [Fact]
        public void Filtrar__ColaboradorsValidos__RetornaListaDeColaboradors()
        {
            // Prepara
            var mock = new Mock<IColaboradorRepository>();
            mock.Setup(colaboradorRepository => colaboradorRepository.Filtrar(1, 1)).Returns(new List<Colaborador>
            {
                _colaborador,
                _colaborador
            });

            // Testa
            var service = new ColaboradorService(mock.Object);
            var retorno = service.Filtrar(1, 1);

            //Valida
            Assert.IsType<List<Colaborador>>(retorno);
        }
    }
}