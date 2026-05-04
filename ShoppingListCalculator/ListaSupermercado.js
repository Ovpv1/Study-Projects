//Caso o valor total dos pedidos seja superior a R$200,00, o cliente receberá um desconto de 15% no valor total da conta.
function verificarDesconto(pedidos){
    let valor = 0
    
    for(i = 0; i < pedidos.length; i++){
        valor += pedidos[i]
    }

    if (valor > 200){
        return valor*0.85
    } else{
        return valor
    }

}

let pedidos = []
let preco
while(true){
    console.log(`\nLista dos valores: ${pedidos}\n`)
    preco = prompt('Para apagar o último produto, digite "retornar"\nPara finalizar a lista, digite "sair"\nDigite o valor dos produtos a serem adquiridos: ')

    if(preco.toLowerCase() == 'sair'){
        console.log('Lista encerrada.')
        break
    } else if(preco.toLowerCase() == 'retornar' && pedidos.length == 0){
        console.log('\nAdicione pelo menos um valor à lista.\n')
        continue
    } else if(preco.toLowerCase() == 'retornar'){
        pedidos.pop()
        continue
    } else 
        if(isNaN(preco)){
        console.log('\nPor favor, digite um valor válido.')
        continue
    } else {
        preco = Number(preco)
    }

    pedidos.push(preco)
}

let valorFinal = verificarDesconto(pedidos)
console.log(`A lista finalizada é: ${pedidos}`)
console.log(`O preço da conta deu R$${valorFinal}`)
