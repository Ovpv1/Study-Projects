const entregas = []

function calcularTaxaPeso(peso){
    if(peso <= 5){
        return 0
    } else{
        let excedente = peso - 5
        return excedente*2.5
    }
}

function calcularTaxaBairro(bairro,valorFinal){
    if (bairro == 'n'){
        return valorFinal*1
    } else{
        return valorFinal*1.1
    }
}

function calcularPrecoDistancia(distancia,veiculo){
    if (veiculo == 'bicicleta'){
        return distancia*1.2
    } else{
        return distancia*1.8
    }
}

function taxaChuva(clima){
    if(clima == 'chuva'){
        return 3
    } else{
        return 0
    }
}

function valorEntregasTotal(entregas){
    let total = 0
    for(let i = 0; i<entregas.length; i++){
        let entrega = entregas[i]
        let total = (5 + calcularPrecoDistancia(entrega.distancia) + taxaChuva(entrega.clima) + calcularTaxaPeso(entrega.peso))*calcularTaxaBairro(entrega.bairro)
    }
    return total
}

for(let i = 1; i<=10; i++){
    let numEntrega = 'id'+ i //Faz o cadastro do número da entrega
    let veiculo
    let peso
    let clima
    let trajetoDificultoso
    let distancia

    //Recebe o dado da distância da entrega
    while(true){
        distancia = parseFloat(prompt('Qual a distância da entrega? ')).toFixed(1)
        if(isNaN(distancia) || distancia <= 0){
            console.log('Digite um valor válido.\n')
        } else{
            break
        }
    }
    
    //Recebe o dado do veículo utilizado para a entrega
    while(true){
        veiculo = prompt('O veículo usado foi bicicleta(1) ou patinete(2)? ')
        if(veiculo != '1' && veiculo != '2'){
            console.log('Selecione uma das opções.\n')
        } else{
            break;
        }
    }
    if(veiculo == '1'){
        veiculo = 'bicicleta'
    } else{
        veiculo = 'patinete'
    }

    //Recebe o peso da entrega
    while(true){
        let peso = parseInt(prompt('Digite qual o peso da entrega, em Kg: '))
        if(isNaN(peso) || peso <= 0){
            console.log('Digite um valor válido.\n')
        } else{
            break
        }
    }

    //Recebe o dado do clima durante a entrega
    while(true){
        clima = prompt('Estava chovendo(1) ou estava limpo(2)? ')
        if(clima != '1' && clima != '2'){
            console.log('Selecione uma das opções.\n')
        } else{
            break
        }
    }
    if(clima == '1'){
        clima = 'chuva'
    } else{
        clima = 'limpo'
    }


    //Recebe dados do trajeto
    while(true){
        trajetoDificultoso = prompt('Foi necessário passar pelo bairro Centro Histórico? (s/n) ').toLowerCase()
        if(trajetoDificultoso != 's' && trajetoDificultoso != 'n'){
            console.log('Selecione uma das opções.')
        } else{
            break;
        }
    }


    const dados = {
        cadastro: numEntrega,
        distancia: distancia,
        veiculo: veiculo,
        peso: peso,
        clima: clima
    }

    entregas.push(dados)

    let adicionarEntrega
    while(true){
        adicionarEntrega = prompt('Registrar outra entrega? (s/n) ').toLowerCase()
        if(adicionarEntrega != 's' && adicionarEntrega != 'n'){
            console.log('Caractere inválido.\n')
        } else{
            break
        }
    }
    
    if(adicionarEntrega == 'n'){
        break
    }
}

