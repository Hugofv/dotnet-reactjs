using System;
using Newtonsoft.Json;

namespace Niver.Core.Domain.Entities
{
    public class Colaborador
    {
        public int Id { get; set; }
        public Guid Uuid { get; set; }
        public string Nome { get; set; }

        public DateTime Nascimento { get; set; }

        public string Foto { get; set; }

        public string Descricao { get; set; }
    }
}