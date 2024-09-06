function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Verifica se a seção foi encontrada no DOM (para depuração)
   
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
       section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o tipo de perícia ou alguma palavra-chave</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar o HTML dos resultados, titulo e descricao
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada item (dado) da lista de resultados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
           // cria um novo elemento 
           resultados += `
           <div class="item-resultado">
               <h3>
                   <a href="#" target="_blank">${dado.titulo}</a>
               </h3>
               <p class="descricao-meta">${dado.descricao}</p>
               <a href=${dado.link} target="_blank">Mais informações</a>
           </div>
        `;
        } 
        
        // Constrói o HTML para cada resultado, incluindo:
        // - Um título com um link externo
        // - Uma descrição
        // - Um link para mais informações
    }        
 
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}
 



