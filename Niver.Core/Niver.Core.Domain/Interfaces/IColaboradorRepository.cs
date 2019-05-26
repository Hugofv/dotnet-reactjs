using System;
using System.Collections.Generic;
using Niver.Core.Domain.Entities;

namespace Niver.Core.Domain.Interfaces
{
    public interface IColaboradorRepository
    {
        bool Criar(Colaborador colaborador);
        bool Atualizar(Colaborador colaborador, Guid uuid);
        bool Excluir(Guid uuid);
        IList<Colaborador> Listar();
    }
}