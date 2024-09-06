function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Inicializa uma string vazia para armazenar os resultados formatados
  let resultado = "";
  let titulo = "";
  let descricao = "";
  let tag = "";

  // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos)
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tag = dado.tags.toLowerCase();
    console.log(titulo);

    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tag.includes(campoPesquisa)
    ) {
      resultado += `<div class="item-resultado">
      <h2><a href='#'>${dado.titulo}</a></h2>
      <p class="descrisao-meta">${dado.descricao}</p>
      <a href=${dado.link} target="_blank">Veja mais.</a>
    </div>`;
    }

    if (campoPesquisa == "") {
      section.innerHTML = `Nada foi encontrado. Digite um nome de um(a) atleta ou esporte.`;
      return;
    }
  }
  if (!resultado) {
    resultado = `<p>Nada foi encontrado.</p>`;
    return;
  }
  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultado;
}
