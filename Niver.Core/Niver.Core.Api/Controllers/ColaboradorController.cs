using System;
using System.Linq;
using Niver.Core.Application.Interfaces;
using Niver.Core.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Niver.Core.Api.Controllers
{
    /// <inheritdoc/>
    [Route("api/colaborador")]
    public class ColaboradorController : Controller
    {
        private readonly IColaboradorService _colaboradorService;

        /// <inheritdoc/>
        public ColaboradorController(IColaboradorService colaboradorService)
        {
            _colaboradorService = colaboradorService;
        }
        /// <summary>
        /// Cria um novo Colaborador
        /// </summary>
        /// <param name="colaborador"> Json do colaborador a ser cadastrado</param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Criar([FromBody] Colaborador colaborador)
        {
            try
            {
                if (_colaboradorService.Criar(colaborador))
                {
                    return new CreatedResult(string.Empty, null);
                }
                return new BadRequestResult();
            }
            catch (Exception exception)
            {
                Console.WriteLine(exception);
                return new BadRequestResult();
            }
        }

        /// <summary>
        /// Atualiza as informações do colaborador ja cadastrado
        /// </summary>
        /// <param name="colaborador">Json do colaborador a ser atualizado</param>
        /// <param name="uuid">Uuid do colaborador a ser atualizado</param>
        /// <returns></returns>
        [HttpPut("{uuid}")]
        public IActionResult Atualizar([FromBody] Colaborador colaborador, Guid uuid)
        {
            try
            {
                if (_colaboradorService.Atualizar(colaborador, uuid))
                {
                    return new OkResult();
                }
                return new NotFoundResult();
            }
            catch (Exception exception)
            {
                Console.WriteLine(exception);
                return new BadRequestResult();
            }
        }

        /// <summary>
        /// Exclui o colaborador
        /// </summary>
        /// <param name="uuid">Uuid do colaborador a ser excluido do sistema</param>
        /// <returns></returns>
        [HttpDelete("{uuid}")]
        public IActionResult Excluir(Guid uuid)
        {
            try
            {
                if (_colaboradorService.Excluir(uuid))
                {
                    return new OkResult();
                }
                return new NotFoundResult();
            }
            catch (Exception exception)
            {
                Console.WriteLine(exception);
                return new BadRequestResult();
            }
        }

        /// <summary>
        /// Busca todos os clientes cadastrados
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                var resultado = _colaboradorService.Listar();
                if (resultado.Any())
                {
                    return new ObjectResult(resultado);
                }
                return new NoContentResult();
            }
            catch (Exception exception)
            {
                Console.WriteLine(exception);
                return new BadRequestResult();
            }
        }
    }
}