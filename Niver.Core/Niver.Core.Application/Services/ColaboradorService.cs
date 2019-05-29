using System;
using System.Collections.Generic;
using Niver.Core.Application.Interfaces;
using Niver.Core.Domain.Entities;
using Niver.Core.Domain.Interfaces;

namespace Niver.Core.Application.Services
{
    public class ColaboradorService : IColaboradorService
    {
        private readonly IColaboradorRepository _colaboradorRepository;

        public ColaboradorService(IColaboradorRepository colaboradorRepository)
        {
            _colaboradorRepository = colaboradorRepository;
        }

        public bool Criar(Colaborador colaborador)
        {
            return _colaboradorRepository.Criar(colaborador);
        }

        public bool Atualizar(Colaborador colaborador, Guid uuid)
        {
            return _colaboradorRepository.Atualizar(colaborador, uuid);
        }

        public bool Excluir(Guid uuid)
        {
            return _colaboradorRepository.Excluir(uuid);
        }

        public IList<Colaborador> Listar()
        {
            return _colaboradorRepository.Listar();
        }

        public IList<Colaborador> Filtrar(int mes, int dia)
        {
            return _colaboradorRepository.Filtrar(mes, dia);
        }
    }
}