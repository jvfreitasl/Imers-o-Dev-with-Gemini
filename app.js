function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Inicializa uma string vazia para armazenar os resultados formatados
  let resultado = "";

  // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos)
  for (let dado of dados) {
    // Cria um novo elemento div para cada resultado, formatando-o como HTML
    resultado += `<div class="item-resultado">
      <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
      <p class="descrisao-meta">${dado.descricao}</p>
      <a href=${dado.link} target="_blank">Veja mais.</a>
    </div>`;
  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultado;
}
