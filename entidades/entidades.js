function mapAniversario (item){
    return {
        nomeAniversariante: item.nomeAniversariante,
        data: item.data,
        sexo: item.sexo
      }
}

function mapAnotacoes (item){
    return {
        anotacao: item.anotacao,
        idUsuario: item.idUsuario,
      }
}

function mapCampanhas (item){
    return {
        titulo: item.titulo,
        horarioInicio: item.horarioInicio,
        horarioTermino: item.horarioTermino,
        dataInicio: item.dataInicio,
        dataFinal: item.dataFinal,
        dia: item.dia,
        descricao:  item.descricao,
        urlImagem:  item.urlImagem,
        adicional: item.adicional,
      }
}

function mapCanais (item){
    return {
        idCanal: item.idCanal,
        nome: item.nome,
      }
}

function mapCategorias (item){
    return {
        nome: item.nome,
        slug: item.slug,
        date: item.date,
      }
}

function mapCultos (item){
    return {
        titulo: item.titulo,
        horarioInicio: item.horarioInicio,
        horarioTermino: item.horarioTermino,
        dia: item.dia,
        descricao: item.descricao,
        urlImagem: item.urlImagem,
        adicional: item.adicional
      }
}

function mapEnsaios (item){
    return {
        titulo: item.titulo,
        horarioInicio: item.horarioInicio,
        horarioTermino: item.horarioTermino,
        dia: item.dia,
        descricao: item.descricao,
        urlImagem: item.urlImagem,
        adicional: item.adicional
      }
}

function mapEventos (item){
    return {
        titulo: item.titulo,
        horarioInicio: item.horarioInicio,
        horarioTermino: item.horarioTermino,
        tipo: item.tipo,
        local: item.local,
        dataInicio: item.dataInicio,
        dataFinal: item.dataFinal,
        dia: item.dia,
        descricao: item.descricao,
        urlImagem: item.urlImagem,
        adicional: item.adicional
      }
}

module.exports = {
  mapAniversario,
  mapAnotacoes,
  mapCampanhas,
  mapCanais,
  mapCategorias,
  mapCultos,
  mapEnsaios,
  mapEventos
}
