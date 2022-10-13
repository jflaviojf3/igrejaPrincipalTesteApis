const axios = require("axios");

const URL = `https://api-igreja-principal.jamb-devs.tech/`;

async function obterIgrejaCompleto(path) {
  const url = `${URL}${path}`;
  const result = await axios.get(url);
  return result.data;
}

async function obterIgreja(path, entidade) {
  const url = `${URL}${path}`;
  const result = await axios.get(url);
  return result.data.map(entidade)
}

async function obterIgrejaId(path) {
  const url = `${URL}${path}`;
  const result = await axios.get(url);
  return result.data;
}

async function inserirIgreja(path, dados) {
  const url = `${URL}${path}`;
  const result = await axios.post(url, dados);
  return result.data;
}

async function atualizarIgreja(path, dados) {
  const url = `${URL}${path}`;
  const result = await axios.put(url, dados);
  return result.data;
}

async function deletarIgreja(path) {
  const url = `${URL}${path}`;
  const result = await axios.delete(url);
  return result.data;
}

function trataObjeto(objeto) {
  delete objeto._id
  delete objeto.__v

  const result = objeto
  return result;
}

async function totalRegistro(endpoint, entidade) {
  const resultAll = await obterIgreja(endpoint, entidade);
  return resultAll.length;
}

module.exports = {
  obterIgreja,
  obterIgrejaId,
  inserirIgreja,
  atualizarIgreja,
  deletarIgreja,
  obterIgrejaCompleto,
  trataObjeto,
  totalRegistro
};
