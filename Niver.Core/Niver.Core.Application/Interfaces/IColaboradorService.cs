using System;
using System.Collections.Generic;
using Niver.Core.Domain.Entities;

namespace Niver.Core.Application.Interfaces
{
    public interface IColaboradorService
    {
        bool Criar(Colaborador colaborador);
        bool Atualizar(Colaborador colaborador, Guid uuid);
        bool Excluir(Guid uuid);
        IList<Colaborador> Listar();
    }
}