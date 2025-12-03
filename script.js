const cardapio_loja = [
    { id: "calabresa", pizza: " pizza inteira de calabresa pequena", preco: 20.00},
    { id: "calabresamedia", pizza: " pizza inteira de calabresa média", preco: 25.00},
    { id: "calabresagrande", pizza: " pizza inteira de calabresa grande", preco: 30.00},
    { id: "calabresagigante", pizza: " pizza inteira de calabresa gigante", preco: 40.00},
    { id: "Frango", pizza: " pizza de frango com catupiri pequena", preco: 20.00},
    { id: "Frangomedia", pizza: " pizza de frango com catupiri média", preco: 25.00},
    { id: "Frangogrande", pizza: " pizza de frango com catupiri grande", preco: 30.00},
    { id: "Frangogigante", pizza: " pizza de frango com catupiri grande", preco: 40.00},
    { id: "quatro queijos", pizza: " pizza de quatro queijos pequena", preco: 20.00},
    { id: "quatro queijosmedia", pizza: " pizza de quatro queijos média", preco: 25.00},
    { id: "quatro queijosgrande", pizza: " pizza de quatro queijos grande", preco: 30.00},
    { id: "quatro queijosgigante", pizza: " pizza de quatro queijos gigante", preco: 40.00},
    { id: "strogonoff", pizza: " Pizza de strogonff", preco: 20.00},
    { id: "strogonoffmedia", pizza: " Pizza de strogonff média", preco: 25.00},
    { id: "strogonoffgrande", pizza: " Pizza de strogonff grande", preco: 30.00},
    { id: "strogonoffgigante", pizza: " Pizza de strogonff gigante", preco: 40.00},
    { id: "Nada", pizza: " Nada ", preco: 0.00},
];

const cardapio_loja_2 = [
    { id: "coca", pizza: " coca cola lata - R$3,59 ", preco: 3.59 },
    { id: "coca600", pizza: " coca cola 600 - R$5,39 ", preco: 5.39 },
    { id: "cocalitro", pizza: " coca cola litro - R$6,22 ", preco: 6.22 },
    { id: "coca2litro", pizza: " coca cola 2 litros - R$8,42 ", preco: 8.42 },
    { id: "coca3litro", pizza: " coca cola 3 litros - R$9,42 ", preco: 9.42 },
    { id: "guarana", pizza: " guaraná - R$3,59 ", preco: 3.59 },
    { id: "coca600", pizza: " guaraná 600 - R$5,39 ", preco: 5.39 },
    { id: "guaranalitro", pizza: " guaraná litro - R$6,22 ", preco: 6.22 },
    { id: "guarana2litro", pizza: " guaraná 2 litros - R$8,42 ", preco: 8.42 },
    { id: "guarana3litro", pizza: " guaraná 3 litros - R$9,42 ", preco: 9.42 },
    { id: "fanta", pizza: " fanta lata - R$3,59 ", preco: 3.59 },
    { id: "fanta600", pizza: " fanta 600 - R$5,39 ", preco: 5.39 },
    { id: "fantalitro", pizza: " fanta litro - R$6,22 ", preco: 6.22 },
    { id: "fanta2litro", pizza: " fanta 2 litros - R$8,42 ", preco: 8.42 },
    { id: "fanta3litro", pizza: " fanta 3 litros - R$9,42 ", preco: 9.42 },
    { id: "pepsi", pizza: " pepsi lata - R$3,59 ", preco: 3.59 },
    { id: "pepsi600", pizza: " pepsi 600 - R$5,39 ", preco: 5.39 },
    { id: "pepsilitro", pizza: " pepsi litro - R$6,22 ", preco: 6.22 },
    { id: "pepsi2litro", pizza: " pepsi 2 litros - R$8,42 ", preco: 8.42 },
    { id: "pepsi3litro", pizza: " pepsi 3 litros - R$9,42 ", preco: 9.42 },
    { id: "Nada", pizza: " Nada ", preco: 0.00 },
];


const acompanhante_loja = [
    { id: "porcaofrango", porcao: "porção de frango pequena ", preco: 5.00},
    { id: "porcaofrangomedia", porcao: "porção de frango média ", preco: 10.00},
    { id: "porcaofrangogrande", porcao: "porção de frango grande ", preco: 15.00},
    { id: "porcaopeixe", porcao: "porção de tilápia pequena", preco: 5.00  },
    { id: "porcaopeixemedia", porcao: "porção de tilápia média", preco: 10.00  },
    { id: "porcaopeixe", porcao: "porção de tilápia grande", preco: 15.00  },
    { id: "porcaobatata", porcao: "porção de batata pequena", preco: 5.00  },
    { id: "porcaobatatamedia", porcao: "porção de batata média", preco: 10.00  },
    { id: "porcaobatatagrande", porcao: "porção de batata grande", preco: 15.00  },
    { id: "Nada", porcao: "Nenhum", preco: 0.00                }
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
    const Pagamento = document.getElementById("pagamento").value; 
    const nomeId = document.getElementById("nome").value;   
    const cpfId = document.getElementById("cpf").value;
    const enderecoId = document.getElementById("endereco").value;
    const numeroid = document.getElementById("numero").value;
    const cardapioId = document.getElementById("cardapio").value;
    const cardapioId_2 = document.getElementById("cardapioww").value;
    const acompanhanteId = document.getElementById("acompanhantee").value;

    var cardapioo = procurarPorId(cardapio_loja, cardapioId);
    var cardapioww = procurarPorId(cardapio_loja_2, cardapioId_2);
    var acompanhantee = procurarPorId(acompanhante_loja, acompanhanteId);

    const total = cardapioo.preco + cardapioww.preco + acompanhantee.preco
                
    const relatorioHTML =`
       <h2>Relatório do Pedido</h2>
       <p><strong>Comprador: </strong> ${nomeId} </p>
       <p><strong>CPF: </strong> ${cpfId} </p>
       <p><strong>Endereço: </strong> ${enderecoId} </p>
       <p><strong>Numero: </strong> ${numeroid} </p>
       <p><strong>Pizza: </strong> ${cardapioId} = R$ ${(cardapioo.preco).toFixed(2)}  </p>
       <p><strong>bebidas: </strong> ${cardapioId_2} = R$ ${(cardapioww.preco).toFixed(2)}  </p>
       <p><strong>porção: </strong> ${acompanhanteId} = R$ ${(acompanhantee.preco).toFixed(2)}  </p>
       <p><strong>Preço Total: </strong> R$ ${total.toFixed(2)} </p>
       <p><strong>forma de pagamento: </strong> ${Pagamento}</p>
       <p>Obrigado por usar nosso site!</p>
    `;
    
    document.getElementById("relatorio").innerHTML = relatorioHTML;
}