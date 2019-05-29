using System;
using System.Collections.Generic;
using Niver.Core.Api.Controllers;
using Niver.Core.Application.Interfaces;
using Niver.Core.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;

namespace Niver.Core.Api.Test.Controllers
{
    public class ColaboradorControllerTest
    {
        private readonly Colaborador _colaborador = new Colaborador
        {
            Nome = "Nome",
            Nascimento = DateTime.Now,
            Foto = "base64",
            Uuid = Guid.NewGuid()
        };

        [Fact]
        public void Criar__ColaboradorValido__RetornaCreatedResult()
        {
            // Prepara
            var mock = new Mock<IColaboradorService>();
            mock.Setup(colaboradorService => colaboradorService.Criar(_colaborador)).Returns(true);

            // Testa
            var controller = new ColaboradorController(mock.Object);
            var retorno = controller.Criar(_colaborador);

            //Valida
            Assert.IsAssignableFrom<CreatedResult>(retorno);
        }

        [Fact]
        public void Criar__ColaboradorInvalido__RetornaBadRequestResult()
        {
            // Prepara
            var mock = new Mock<IColaboradorService>();
            mock.Setup(colaboradorService => colaboradorService.Criar(null)).Returns(false);

            // Testa
            var controller = new ColaboradorController(mock.Object);
            var retorno = controller.Criar(null);

            //Valida
            Assert.IsAssignableFrom<BadRequestResult>(retorno);
        }

        [Fact]
        public void Criar__ErroServidor__RetornaBadRequestResult()
        {
            // Prepara
            var mock = new Mock<IColaboradorService>();
            mock.Setup(colaboradorService => colaboradorService.Criar(null)).Throws<Exception>();

            // Testa
            var controller = new ColaboradorController(mock.Object);
            var retorno = controller.Criar(null);

            //Valida
            Assert.IsAssignableFrom<BadRequestResult>(retorno);
        }

        [Fact]
        public void Atualizar__ColaboradorValido__RetornaOkResult()
        {
            // Prepara
            var mock = new Mock<IColaboradorService>();
            mock.Setup(colaboradorService => colaboradorService.Atualizar(_colaborador, It.IsAny<Guid>())).Returns(true);

            // Testa
            var controller = new ColaboradorController(mock.Object);
            var retorno = controller.Atualizar(_colaborador, It.IsAny<Guid>());

            //Valida
            Assert.IsAssignableFrom<OkResult>(retorno);
        }

        [Fact]
        public void Atualizar__ColaboradorInvalido__RetornaNotFoundResult()
        {
            // Prepara
            var mock = new Mock<IColaboradorService>();
            mock.Setup(colaboradorService => colaboradorService.Atualizar(null, Guid.Empty)).Returns(false);

            // Testa
            var controller = new ColaboradorController(mock.Object);
            var retorno = controller.Atualizar(null, Guid.Empty);

            //Valida
            Assert.IsAssignableFrom<NotFoundResult>(retorno);
        }

        [Fact]
        public void Atualizar__ErroServidor__RetornaBadRequestResult()
        {
            // Prepara
            var mock = new Mock<IColaboradorService>();
            mock.Setup(colaboradorService => colaboradorService.Atualizar(null, Guid.Empty)).Throws<Exception>();

            // Testa
            var controller = new ColaboradorController(mock.Object);
            var retorno = controller.Atualizar(null, Guid.Empty);

            //Valida
            Assert.IsAssignableFrom<BadRequestResult>(retorno);
        }

        [Fact]
        public void Excluir__ColaboradorValido__RetornaOkResult()
        {
            // Prepara
            var mock = new Mock<IColaboradorService>();
            mock.Setup(colaboradorService => colaboradorService.Excluir(It.IsAny<Guid>())).Returns(true);

            // Testa
            var controller = new ColaboradorController(mock.Object);
            var retorno = controller.Excluir(It.IsAny<Guid>());

            //Valida
            Assert.IsAssignableFrom<OkResult>(retorno);
        }

        [Fact]
        public void Excluir__ColaboradorInvalido__RetornaNotFoundResult()
        {
            // Prepara
            var mock = new Mock<IColaboradorService>();
            mock.Setup(colaboradorService => colaboradorService.Excluir(Guid.Empty)).Returns(false);

            // Testa
            var controller = new ColaboradorController(mock.Object);
            var retorno = controller.Excluir(Guid.Empty);

            //Valida
            Assert.IsAssignableFrom<NotFoundResult>(retorno);
        }

        [Fact]
        public void Excluir__ErroServidor__RetornaBadRequestResult()
        {
            // Prepara
            var mock = new Mock<IColaboradorService>();
            mock.Setup(colaboradorService => colaboradorService.Excluir(Guid.Empty)).Throws<Exception>();

            // Testa
            var controller = new ColaboradorController(mock.Object);
            var retorno = controller.Excluir(Guid.Empty);

            //Valida
            Assert.IsAssignableFrom<BadRequestResult>(retorno);
        }

        [Fact]
        public void Listar__ColaboradorsValido__RetornaObjectResult()
        {
            // Prepara
            var mock = new Mock<IColaboradorService>();
            mock.Setup(colaboradorService => colaboradorService.Listar()).Returns(new List<Colaborador>
            {
                _colaborador,
                _colaborador
            });

            // Testa
            var controller = new ColaboradorController(mock.Object);
            var retorno = controller.Listar();

            //Valida
            Assert.IsAssignableFrom<ObjectResult>(retorno);
        }

        [Fact]
        public void Listar__ColaboradorsInvalido__RetornaNoContentResult()
        {
            // Prepara
            var mock = new Mock<IColaboradorService>();
            mock.Setup(colaboradorService => colaboradorService.Listar()).Returns(new List<Colaborador>());

            // Testa
            var controller = new ColaboradorController(mock.Object);
            var retorno = controller.Listar();

            //Valida
            Assert.IsAssignableFrom<NoContentResult>(retorno);
        }

        [Fact]
        public void Listar__ErroServidor__RetornaBadRequestResult()
        {
            // Prepara
            var mock = new Mock<IColaboradorService>();
            mock.Setup(colaboradorService => colaboradorService.Listar()).Throws<Exception>();

            // Testa
            var controller = new ColaboradorController(mock.Object);
            var retorno = controller.Listar();

            //Valida
            Assert.IsAssignableFrom<BadRequestResult>(retorno);
        }

        [Fact]
        public void Filtrar__ColaboradorsValido__RetornaObjectResult()
        {
            // Prepara
            var mock = new Mock<IColaboradorService>();
            mock.Setup(colaboradorService => colaboradorService.Filtrar(1 ,0)).Returns(new List<Colaborador>
            {
                _colaborador,
                _colaborador
            });

            // Testa
            var controller = new ColaboradorController(mock.Object);
            var retorno = controller.Filtrar(1,0);

            //Valida
            Assert.IsAssignableFrom<ObjectResult>(retorno);
        }

        [Fact]
        public void Filtrar__ColaboradorsInvalido__RetornaNoContentResult()
        {
            // Prepara
            var mock = new Mock<IColaboradorService>();
            mock.Setup(colaboradorService => colaboradorService.Filtrar(1,1)).Returns(new List<Colaborador>());

            // Testa
            var controller = new ColaboradorController(mock.Object);
            var retorno = controller.Filtrar(1,1);

            //Valida
            Assert.IsAssignableFrom<NoContentResult>(retorno);
        }

        [Fact]
        public void Filtrar__ErroServidor__RetornaBadRequestResult()
        {
            // Prepara
            var mock = new Mock<IColaboradorService>();
            mock.Setup(colaboradorService => colaboradorService.Filtrar(1,2)).Throws<Exception>();

            // Testa
            var controller = new ColaboradorController(mock.Object);
            var retorno = controller.Filtrar(1,2);

            //Valida
            Assert.IsAssignableFrom<BadRequestResult>(retorno);
        }
    }
}
