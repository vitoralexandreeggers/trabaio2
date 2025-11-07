const cardapio_loja = [
    { id: "calabresa", pizza: " pizza inteira de calabresa - R$20.00 ", preco: 20.00},
    { id: "Frango", pizza: " pizza de frango com catupiri - R$20.00 ", preco: 20.00},
    { id: "Chocolate", pizza: " pizza de chocolate - R$20.00 ", preco: 20.00},
    { id: "quatro queijos", pizza: " pizza de quatro queijos - R$20.00", preco: 20.00},
    { id: "pepperoni", pizza: " Pizza de Pepperoni - R$20.00 ", preco: 20.00},
    { id: "portuguesa", pizza: " Pizza portuguesa - R$20.00 ", preco: 20.00},
    { id: "strogonoff", pizza: " Pizza de strogonff - R$20.00 ", preco: 20.00},
    { id: "Nada", pizza: " Nada ", preco: 0.00},
];

const cardapio_loja_2 = [
    { id: "refri", pizza: " Refrigerante - R$7,99 ", preco: 7.99 },
    { id: "suco", pizza: " sucos - R$3,99 ", preco: 3.99 },
    { id: "cerveja", pizza: " cervejas - R$8,99 ", preco: 8.99},
    { id: "água", pizza: " agua - R$2,99 ", preco: 2.99},
    { id: "Nada", pizza: " Nada ", preco: 0.00 },
];

const tamanho_loja = [
    { id: "Pequeno", tamanho: " Pequeno ", preco: 2.50 },
    { id: "Médio", tamanho: " Médio ", preco: 5.00     },
    { id: "Grande", tamanho: " Grande ", preco: 10.00  },
    { id: "Gigante", tamanho: " Gigante ", preco: 15.00  }
];

const acompanhante_loja = [
    { id: "porcaofrango", porcao: "porção de frango - R$ 10.00 ", preco: 10.00},
    { id: "porcaopeixe", porcao: "porção de peixe - R$ 10.00 ", preco: 10.00  },
    { id: "porcaobatata", porcao: "porção de batata - R$ 10.00 ", preco: 10.00  },
    { id: "porcaocamarao", porcao: "porção de camarão - R$ 10.00 ", preco: 10.00  },
    { id: "Nada", porcao: "Nenhum - R$ 0.00 ", preco: 0.00                }
];


function preencher(){
    const selectCardapio = document.getElementById("cardapio");
     for (let i = 0; i < cardapio_loja.length; i++) {
         const item = cardapio_loja[i];
         const option = document.createElement("option");
         option.value = item.id;
         option.textContent = item.pizza;
         selectCardapio.appendChild(option);
    }

    const selectCardapioww = document.getElementById("cardapioww");
     for (let i = 0; i < cardapio_loja_2.length; i++) {
         const item = cardapio_loja_2[i];
         const option = document.createElement("option");
         option.value = item.id;
         option.textContent = item.pizza;
         selectCardapioww.appendChild(option);
    } 

    const selectAcompanhante = document.getElementById("acompanhantee");
     for (let i = 0; i < acompanhante_loja.length; i++) {
         const item = acompanhante_loja[i];
         const option = document.createElement("option");
         option.value = item.id;
         option.textContent = item.porcao;
         selectAcompanhante.appendChild(option);
    }


    const selectTamanho = document.getElementById("tamanho");
     for (let i = 0; i < tamanho_loja.length; i++) {
         const item = tamanho_loja[i];
         const option = document.createElement("option");
         option.value = item.id;
         option.textContent = item.tamanho.trim();
         selectTamanho.appendChild(option);
    }
    
}
preencher();

function procurarPorId(lista, idProcurado) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === idProcurado) {
            return lista[i];
        }
    }
    return null;
}

function gerarRelatorio() {
    const PagamentoId = document.querySelector('input[name="pagamento"]:checked')?.value || "Indefinido...";
    const nomeId = document.getElementById("nome").value;   
    const cpfId = document.getElementById("cpf").value;
    const enderecoId = document.getElementById("endereco").value;
    const numeroid = document.getElementById("numero").value;
    const cardapioId = document.getElementById("cardapio").value;
    const cardapioId_2 = document.getElementById("cardapioww").value;
    const tamanhoId = document.getElementById("tamanho").value;
    const acompanhanteId = document.getElementById("acompanhantee").value;

    const qtdCardapio = parseInt(document.getElementById("qtdCardapio").value) || 0;
    const qtdCardapio2 = parseInt(document.getElementById("qtdCardapio2").value) || 0;
    const qtdAcompanhante = parseInt(document.getElementById("qtdAcompanhante").value) || 0;

    var cardapioo = procurarPorId(cardapio_loja, cardapioId);
    var cardapioww = procurarPorId(cardapio_loja_2, cardapioId_2);
    var tamanhoo = procurarPorId(tamanho_loja, tamanhoId);
    var acompanhantee = procurarPorId(acompanhante_loja, acompanhanteId);

    const total = (cardapioo.preco * qtdCardapio) + 
                  (cardapioww.preco * qtdCardapio2) + 
                  (acompanhantee.preco * qtdAcompanhante) +
                  tamanhoo.preco;
                

    const relatorioHTML =`
       <h2>Relatório do Pedido</h2>
       <p><strong>Comprador: </strong> ${nomeId} </p>
       <p><strong>CPF: </strong> ${cpfId} </p>
       <p><strong>Endereço: </strong> ${enderecoId} </p>
      <p><strong>Numero: </strong> ${numeroid} </p>
       <p><strong>Pizza: </strong> ${cardapioId} x${qtdCardapio} = R$ ${(cardapioo.preco * qtdCardapio).toFixed(2)}  </p>
       <p><strong>bebidas: </strong> ${cardapioId_2} x${qtdCardapio2} = R$ ${(cardapioww.preco * qtdCardapio2).toFixed(2)}  </p>
       <p><strong>porção: </strong> ${acompanhanteId} x${qtdAcompanhante} = R$ ${(acompanhantee.preco * qtdAcompanhante).toFixed(2)}  </p>
       <p><strong>Tamanho: </strong> ${tamanhoId} = R$ ${tamanhoo.preco.toFixed(2)} </p>
       <p><strong>Preço Total: </strong> R$ ${total.toFixed(2)} </p>
       <p><strong>Modo de Pagamento: </strong> ${PagamentoId}</p>
       <p>Obrigado por usar nosso site!</p>
    `;
    
    document.getElementById("relatorio").innerHTML = relatorioHTML;
}