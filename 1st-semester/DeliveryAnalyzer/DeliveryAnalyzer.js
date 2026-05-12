//const prompt = require('prompt-sync')();

function calcularTaxaPeso(entrega){
    if(entrega.peso <= 5){
            return 0
    } else{
        let excedente = entrega.peso - 5
        return excedente*2.5
    }
    
}

function calcularTaxaBairro(entrega){
    if (entrega.bairro == 'Registrado'){
        return 1.1
    } else{
        return 1
    } 
}


function calcularPrecoDistancia(entrega){
    let precoDistancia = 0
    if(entrega.veiculo == 'bicicleta'){
        precoDistancia = entrega.distancia*1.2
    } else{
        precoDistancia = entrega.distancia*1.8
    }
    return precoDistancia
}

function taxaChuva(entrega){
    if(entrega.clima == 'chuva'){
        return 3
    } else{
        return 0
    }
}

function valorEntregasTotal(entregas){
    let totalEntrega = 0
    let valorFixo = 5
    for(let i = 0; i<entregas.length; i++){
        let precoDistancia = calcularPrecoDistancia(entregas[i])
        let precoChuva = taxaChuva(entregas[i])
        let precoPeso = calcularTaxaPeso(entregas[i])
        let taxaBairro = calcularTaxaBairro(entregas[i])

        totalEntrega += (valorFixo + precoDistancia + precoChuva + precoPeso)*taxaBairro
    }

    return totalEntrega
}

function numEntregas(entregas){
    return entregas.length
}

function distanciaTotal(entregas){
    let somaDistancia = 0
    for(let i = 0; i<entregas.length; i++){
        somaDistancia += entregas[i].distancia
    }
    return somaDistancia
}

function recebeBonus(entregas){
    if (numEntregas(entregas) > 8 || distanciaTotal(entregas) > 40){
        return true
    } else{
        return false
    }
}

function pagamentoTotal(entregas){
    let total = valorEntregasTotal(entregas)
    if(recebeBonus(entregas) == true){
        return total + 25
    }
    return total
}


const entregas = []

for(let i = 1; i<=10; i++){
    let IdEntrega = 'ID:'+ i //Faz o cadastro do número da entrega
    let veiculo
    let peso
    let clima
    let trajetoDificultoso
    let distancia
    console.log(`\n--------Entrega N° ${i}--------`)

    //Recebe o dado da distância da entrega
    while(true){
        distancia = parseFloat(prompt('\nQual a distância da entrega? '))
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
        peso = parseInt(prompt('Digite qual o peso da entrega, em Kg: '))
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

    if(trajetoDificultoso == 's'){
        trajetoDificultoso = 'Registrado'
    } else{
        trajetoDificultoso = 'Não registrado.'
    }
    const dados = {
        cadastro: IdEntrega,
        distancia: distancia,
        veiculo: veiculo,
        peso: peso,
        clima: clima,
        bairro: trajetoDificultoso
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

let numeroEntregas = numEntregas(entregas)
let distanciaPercorrida = distanciaTotal(entregas)
let bonus = recebeBonus(entregas)
let pagamentoFinal = pagamentoTotal(entregas)

console.log('\n--------RELATÓRIO FINAL--------')
console.log(`\nO número de entregas foi/foram: ${numeroEntregas} entrega(s)`)
console.log(`A distância total percorrida foi de ${distanciaPercorrida.toFixed(1)}km`)
console.log(`Situação do bônus: ${bonus}`)
console.log(`O valor final a ser repassado para o entregador é de R$${pagamentoFinal.toFixed(2)}`)