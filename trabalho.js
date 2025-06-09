function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

export { geradorDeTagsDeIdentificacao };

function verificarSePodeSerAdotado(idade, porte) {
  if (idade === 1 && porte === "M") {
    return true;
  }
  return false;
}

export { verificarSePodeSerAdotado };

function calcularConsumoDeRacao(nome, idade, peso) {
  const consumoPorQuilo = 300;
  const consumoDiario = Math.floor(peso * consumoPorQuilo);
  return consumoDiario;
}

export { calcularConsumoDeRacao };

function decidirTipoDeAtividadePorPorte(porte) {
  switch (porte) {
    case "pequeno":
      return "brincar dentro de casa";
    case "médio":
      return "passeios moderados no bairro";
    case "grande":
      return "corridas e exercícios ao ar livre";
    default:
      return "porte não identificado";
  }
}

export { decidirTipoDeAtividadePorPorte };

async function buscarDadoAsync() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const nome = "Pipoca";
  return nome;
}

export { buscarDadoAsync };
