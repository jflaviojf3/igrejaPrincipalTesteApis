const assert = require("assert");
const map = require("./entidades/entidades");
const service = require("./servicos/services");
const mDados = require("./massaDados/massaDado.json");


describe("Igreja Principal - Teste Aniversariante", function () {
  this.beforeAll(async () => {
    qtdTotalAniver = await service.totalRegistro("aniversarios", map.mapAniversario);
  });

  it("Deve inserir um Aniversariante", async () => {
    const expected = {
      message: "Aniversário cadastrado com sucesso!",
    };
    const resultado = await service.inserirIgreja(
      "aniversarios",
      mDados.aniversario
    );
    assert.deepEqual(resultado, expected);
  });

  it("Deve buscar todo Aniversariante", async () => {
    TODOS_ANIVER = await service.obterIgrejaCompleto("aniversarios");
    assert.ok(
      TODOS_ANIVER.length >= qtdTotalAniver,
      "não contém mais de 1 aniversáriante"
    );
  });

  it("Deve buscar um Aniversariante", async () => {
    idTstAnive = TODOS_ANIVER[qtdTotalAniver]._id;
    let resultado = await service.obterIgrejaId(`aniversarios/${idTstAnive}`);
    resultado = service.trataObjeto(resultado);
    assert.deepEqual(resultado, mDados.aniversario);
  });

  it("Deve atualizar Aniversariante", async () => {
    const expected = {
      message: "Aniversário atualizado com sucesso!",
    };
    let dadoAtualizado = mDados.aniversario;
    dadoAtualizado.nomeAniversariante = "Jessé Flávio Pereira Lima";
    const resultado = await service.atualizarIgreja(
      `aniversarios/${idTstAnive}`,
      dadoAtualizado
    );
    assert.deepEqual(resultado, expected);
  });

  it("Deve validar atualizadação Aniversariante", async () => {
    let resultado = await service.obterIgrejaId(`aniversarios/${idTstAnive}`);
    resultado = service.trataObjeto(resultado);
    let dadoAtualizado = mDados.aniversario;
    dadoAtualizado.nomeAniversariante = "Jessé Flávio Pereira Lima";
    assert.deepEqual(resultado, dadoAtualizado);
  });

  it("Deve deletar ultimo Aniversariante", async () => {
    const expected = {
      message: "Aniversário removido com sucesso!",
    };
    const resultado = await service.deletarIgreja(`aniversarios/${idTstAnive}`);
    assert.deepEqual(resultado, expected);
    const qtdTotalAniverDel = await service.totalRegistro(
      "aniversarios",
      map.mapAniversario
    );
    assert.ok(qtdTotalAniver == qtdTotalAniverDel);
  });
});



describe("Igreja Principal - Teste Anotacoes", function () {
  this.beforeAll(async () => {
    qtdTotalAnotacoes = await service.totalRegistro("anotacoes", map.mapAnotacoes);
  });

  it("Deve inserir um Anotacoes", async () => {
    const expected = {
      message: "Anotação cadastrada com sucesso!",
    };
    const resultado = await service.inserirIgreja(
      "anotacoes",
      mDados.anotacoes
    );
    assert.deepEqual(resultado, expected);
  });

  it("Deve buscar todo Anotacoes", async () => {
    TODAS_ANOTACOES = await service.obterIgrejaCompleto("anotacoes");
    assert.ok(
      TODAS_ANOTACOES.length >= qtdTotalAnotacoes,
      "não contém mais de 1 Anotacoes"
    );
  });

  it("Deve buscar um Anotacoes", async () => {
    idTstAnota = TODAS_ANOTACOES[qtdTotalAnotacoes]._id;
    let resultado = await service.obterIgrejaId(`anotacoes/${idTstAnota}`);
    resultado = service.trataObjeto(resultado);
    assert.deepEqual(resultado, mDados.anotacoes);
  });

  it("Deve atualizar Anotacoes", async () => {
    const expected = {
      message: "Anotação atualizada com sucesso!",
    };
    let dadoAtualizado = mDados.anotacoes
    dadoAtualizado.idUsuario ="159753"
    const resultado = await service.atualizarIgreja(
      `anotacoes/${idTstAnota}`,
      dadoAtualizado
    );
    assert.deepEqual(resultado, expected);
  });

  it("Deve validar atualizadação Anotacao", async () => {
    let resultado = await service.obterIgrejaId(`anotacoes/${idTstAnota}`);
    resultado = service.trataObjeto(resultado);
    let dadoAtualizado = mDados.anotacoes
    dadoAtualizado.idUsuario ="159753"
    assert.deepEqual(resultado, dadoAtualizado);
  });

  it("Deve deletar ultimo Anotacoes", async () => {
    const expected = {
      message: "Anotação removida com sucesso!",
    };
    const resultado = await service.deletarIgreja(`anotacoes/${idTstAnota}`);
    assert.deepEqual(resultado, expected);
    const qtdTotalAnotacoesDel = await service.totalRegistro(
      "anotacoes",
      map.mapAnotacoes
    );
    assert.ok(qtdTotalAnotacoes == qtdTotalAnotacoesDel);
  });  
});



describe("Igreja Principal - Teste Campanhas", function () {
  this.beforeAll(async () => {
    qtdTotalCampanhas = await service.totalRegistro("campanhas", map.mapCampanhas);
  });

  it("Deve inserir um Campanhas", async () => {
    const expected = {
      message: "Campanha cadastrada com sucesso!",
    };
    const resultado = await service.inserirIgreja(
      "campanhas",
      mDados.campanhas
    );
    assert.deepEqual(resultado, expected);
  });

  it("Deve buscar todo Campanhas", async () => {
    TODAS_CAMPANHAS = await service.obterIgrejaCompleto("campanhas");
    assert.ok(
      TODAS_CAMPANHAS.length >= qtdTotalCampanhas,
      "não contém mais de 1 Campanhas"
    );
  });

  it("Deve buscar um Campanhas", async () => {
    idTstCamp = TODAS_CAMPANHAS[qtdTotalCampanhas]._id;
    let resultado = await service.obterIgrejaId(`campanhas/${idTstCamp}`);
    resultado = service.trataObjeto(resultado);
    assert.deepEqual(resultado, mDados.campanhas);
  });

  it("Deve atualizar Campanhas", async () => {
    const expected = {
      message: "Campanha atualizada com sucesso!",
    };
    let dadoAtualizado = mDados.campanhas
    dadoAtualizado.titulo ="Teste Automatizado na Campanha Atualizada"
    const resultado = await service.atualizarIgreja(
      `campanhas/${idTstCamp}`,
      dadoAtualizado
    );
    assert.deepEqual(resultado, expected);
  });

  it("Deve validar atualizadação Anotacao", async () => {
    let resultado = await service.obterIgrejaId(`campanhas/${idTstCamp}`);
    resultado = service.trataObjeto(resultado);
    let dadoAtualizado = mDados.campanhas
    dadoAtualizado.titulo ="Teste Automatizado na Campanha Atualizada"
    assert.deepEqual(resultado, dadoAtualizado);
  });

  it("Deve deletar ultimo Campanhas", async () => {
    const expected = {
      message: "Campanha removida com sucesso!",
    };
    const resultado = await service.deletarIgreja(`campanhas/${idTstCamp}`);
    assert.deepEqual(resultado, expected);
    const qtdTotalCampanhasDel = await service.totalRegistro(
      "campanhas",
      map.mapCampanhas
    );
    assert.ok(qtdTotalCampanhas == qtdTotalCampanhasDel);
  });  
});



describe("Igreja Principal - Teste Canais", function () {
  this.beforeAll(async () => {
    qtdTotalCanais = await service.totalRegistro("canais", map.mapCanais);
  });

  it("Deve inserir um Canais", async () => {
    const expected = {
      message: "Canal cadastrado com sucesso!",
    };
    const resultado = await service.inserirIgreja(
      "canais",
      mDados.canais
    );
    assert.deepEqual(resultado, expected);
  });

  it("Deve buscar todo Canais", async () => {
    TODOS_CANAIS = await service.obterIgrejaCompleto("canais");
    assert.ok(
      TODOS_CANAIS.length >= qtdTotalCanais,
      "não contém mais de 1 Canais"
    );
  });

  it("Deve buscar um Canais", async () => {
    idTstCana = TODOS_CANAIS[qtdTotalCanais]._id;
    let resultado = await service.obterIgrejaId(`canais/${idTstCana}`);
    resultado = service.trataObjeto(resultado);
    assert.deepEqual(resultado, mDados.canais);
  });

  it("Deve atualizar Canais", async () => {
    const expected = {
      message: "Canal atualizado com sucesso!",
    };
    let dadoAtualizado = mDados.canais
    dadoAtualizado.nome ="Curso Erick Wendel"
    const resultado = await service.atualizarIgreja(
      `canais/${idTstCana}`,
      dadoAtualizado
    );
    assert.deepEqual(resultado, expected);
  });

  it("Deve validar atualizadação Anotacao", async () => {
    let resultado = await service.obterIgrejaId(`canais/${idTstCana}`);
    resultado = service.trataObjeto(resultado);
    let dadoAtualizado = mDados.canais
    dadoAtualizado.nome ="Curso Erick Wendel"
    assert.deepEqual(resultado, dadoAtualizado);
  });

  it("Deve deletar ultimo Canais", async () => {
    const expected = {
      message: "Canal removido com sucesso!",
    };
    const resultado = await service.deletarIgreja(`canais/${idTstCana}`);
    assert.deepEqual(resultado, expected);
    const qtdTotalCanaisDel = await service.totalRegistro(
      "canais",
      map.mapCanais
    );
    assert.ok(qtdTotalCanais == qtdTotalCanaisDel);
  });  
});



describe("Igreja Principal - Teste Categorias", function () {
  this.beforeAll(async () => {
    qtdTotalCategorias = await service.totalRegistro("categorias", map.mapCategorias);
  });

  it("Deve inserir um Categorias", async () => {
    const expected = {
      message: "Categoria cadastrada com sucesso!",
    };
    const resultado = await service.inserirIgreja(
      "categorias",
      mDados.categorias
    );
    assert.deepEqual(resultado, expected);
  });

  it("Deve buscar todo Categorias", async () => {
    TODAS_CATEGORIAS = await service.obterIgrejaCompleto("categorias");
    assert.ok(
      TODAS_CATEGORIAS.length >= qtdTotalCategorias,
      "não contém mais de 1 Categorias"
    );
  });

  it("Deve buscar um Categorias", async () => {
    idTstCate = TODAS_CATEGORIAS[qtdTotalCategorias]._id;
    let resultado = await service.obterIgrejaId(`categorias/${idTstCate}`);
    resultado = service.trataObjeto(resultado);
    assert.deepEqual(resultado, mDados.categorias);
  });

  it("Deve atualizar Categorias", async () => {
    const expected = {
      message: "Categoria atualizada com sucesso!",
    };
    let dadoAtualizado = mDados.categorias
    dadoAtualizado.nome ="Cat2"
    const resultado = await service.atualizarIgreja(
      `categorias/${idTstCate}`,
      dadoAtualizado
    );
    assert.deepEqual(resultado, expected);
  });

  it("Deve validar atualizadação Anotacao", async () => {
    let resultado = await service.obterIgrejaId(`categorias/${idTstCate}`);
    resultado = service.trataObjeto(resultado);
    let dadoAtualizado = mDados.categorias
    dadoAtualizado.nome ="Cat2"
    assert.deepEqual(resultado, dadoAtualizado);
  });

  it("Deve deletar ultimo Categorias", async () => {
    const expected = {
      message: "Categoria removida com sucesso!",
    };
    const resultado = await service.deletarIgreja(`categorias/${idTstCate}`);
    assert.deepEqual(resultado, expected);
    const qtdTotalCategoriaDel = await service.totalRegistro(
      "categorias",
      map.mapCategorias
    );
    assert.ok(qtdTotalCategorias == qtdTotalCategoriaDel);
  });  
});



describe("Igreja Principal - Teste Cultos", function () {
  this.beforeAll(async () => {
    qtdTotalCultos = await service.totalRegistro("cultos", map.mapCultos);
  });

  it("Deve inserir um Cultos", async () => {
    const expected = {
      message: "Culto cadastrado com sucesso!",
    };
    const resultado = await service.inserirIgreja(
      "cultos",
      mDados.cultos
    );
    assert.deepEqual(resultado, expected);
  });

  it("Deve buscar todo Cultos", async () => {
    TODOS_CULTOS = await service.obterIgrejaCompleto("cultos");
    assert.ok(
      TODOS_CULTOS.length >= qtdTotalCultos,
      "não contém mais de 1 Cultos"
    );
  });

  it("Deve buscar um Cultos", async () => {
    idTstCult = TODOS_CULTOS[qtdTotalCultos]._id;
    let resultado = await service.obterIgrejaId(`cultos/${idTstCult}`);
    resultado = service.trataObjeto(resultado);
    assert.deepEqual(resultado, mDados.cultos);
  });

  it("Deve atualizar Cultos", async () => {
    const expected = {
      message: "Culto atualizado com sucesso!",
    };
    let dadoAtualizado = mDados.cultos
    dadoAtualizado.titulo ="Teste Automatizado no Culto Atualizada"
    const resultado = await service.atualizarIgreja(
      `cultos/${idTstCult}`,
      dadoAtualizado
    );
    assert.deepEqual(resultado, expected);
  });

  it("Deve validar atualizadação Anotacao", async () => {
    let resultado = await service.obterIgrejaId(`cultos/${idTstCult}`);
    resultado = service.trataObjeto(resultado);
    let dadoAtualizado = mDados.cultos
    dadoAtualizado.titulo ="Teste Automatizado no Culto Atualizada"
    assert.deepEqual(resultado, dadoAtualizado);
  });

  it("Deve deletar ultimo Cultos", async () => {
    const expected = {
      message: "Culto removido com sucesso!",
    };
    const resultado = await service.deletarIgreja(`cultos/${idTstCult}`);
    assert.deepEqual(resultado, expected);
    const qtdTotalCultosDel = await service.totalRegistro(
      "cultos",
      map.mapCultos
    );
    assert.ok(qtdTotalCultos == qtdTotalCultosDel);
  });  
});


describe("Igreja Principal - Teste Ensaios", function () {
  this.beforeAll(async () => {
    qtdTotalEnsaios = await service.totalRegistro("ensaios", map.mapEnsaios);
  });

  it("Deve inserir um Ensaios", async () => {
    const expected = {
      message: "Ensaio cadastrado com sucesso!",
    };
    const resultado = await service.inserirIgreja(
      "ensaios",
      mDados.ensaios
    );
    assert.deepEqual(resultado, expected);
  });

  it("Deve buscar todo Ensaios", async () => {
    TODOS_ENSAIOS = await service.obterIgrejaCompleto("ensaios");
    assert.ok(
      TODOS_ENSAIOS.length >= qtdTotalEnsaios,
      "não contém mais de 1 Ensaios"
    );
  });

  it("Deve buscar um Ensaios", async () => {
    idTstEnsa = TODOS_ENSAIOS[qtdTotalEnsaios]._id;
    let resultado = await service.obterIgrejaId(`ensaios/${idTstEnsa}`);
    resultado = service.trataObjeto(resultado);
    assert.deepEqual(resultado, mDados.ensaios);
  });

  it("Deve atualizar Ensaios", async () => {
    const expected = {
      message: "Ensaio atualizado com sucesso!",
    };
    let dadoAtualizado = mDados.ensaios
    dadoAtualizado.titulo ="Teste Automatizado no Ensaio Atualizada"
    const resultado = await service.atualizarIgreja(
      `ensaios/${idTstEnsa}`,
      dadoAtualizado
    );
    assert.deepEqual(resultado, expected);
  });

  it("Deve validar atualizadação Anotacao", async () => {
    let resultado = await service.obterIgrejaId(`ensaios/${idTstEnsa}`);
    resultado = service.trataObjeto(resultado);
    let dadoAtualizado = mDados.ensaios
    dadoAtualizado.titulo ="Teste Automatizado no Ensaio Atualizada"
    assert.deepEqual(resultado, dadoAtualizado);
  });

  it("Deve deletar ultimo Ensaios", async () => {
    const expected = {
      message: "Ensaio removido com sucesso!",
    };
    const resultado = await service.deletarIgreja(`ensaios/${idTstEnsa}`);
    assert.deepEqual(resultado, expected);
    const qtdTotalEnsaiosDel = await service.totalRegistro(
      "ensaios",
      map.mapEnsaios
    );
    assert.ok(qtdTotalEnsaios == qtdTotalEnsaiosDel);
  });  
});



describe("Igreja Principal - Teste Eventos POST", function () {
  this.beforeAll(async () => {
    qtdTotalEnsaios = await service.totalRegistro("campanhas", map.mapCampanhas);
  });

  it("Deve inserir um Eventos", async () => {
    const expected = {
      message: "Evento cadastrado com sucesso!",
    };
    const resultado = await service.inserirIgreja(
      "eventos",
      mDados.eventos
    );
    assert.deepEqual(resultado, expected);
    qtdTotalEnsaiosDel = await service.totalRegistro("eventos", map.mapEventos);
    assert.ok(qtdTotalEnsaios == qtdTotalEnsaiosDel+1);
  });
  
});