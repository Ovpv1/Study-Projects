# Vou fazer um bingo de apenas uma letra. No caso, será a letra B, então vou criar uma lista apenas com a letra B, contendo 5 números
import random


# Essas são as listas que serão utilizadas ao longo do código 
suaCartela = random.sample(range(1,11), 5)
sorteado_na_cartela = [] # Essa (explicando por via das dúvidas), mostrará os números que foram sorteados e que estão dentro da cartela do usuário.
numerosSorteados = []


print('\n   Esta é a sua cartela de números: ', suaCartela)

while(True):
     prosseguir = input('Devo prosseguir com o sorteio? (Responda "S" ou "N") ').upper()
     if(prosseguir != 'S' and prosseguir != 'N'):
          print('Caractere inválido. Digite novamente.')
     else:
          break


if(prosseguir == 'N'):
     print('Bingo encerrado. \n')

else:
    
    #O bingo em si inicia aqui
     while(len(sorteado_na_cartela) < len(suaCartela)):

          sorteio = random.randint(1,10)

          while(sorteio in numerosSorteados): #Verifica se o número já foi sorteado anteriormente.
               sorteio = random.randint(1,10)

          numerosSorteados.append(sorteio)

          #Adiciona o número na cartela, caso esteja nela.
          if(sorteio in suaCartela):
               sorteado_na_cartela.append(sorteio)
               print(f'\n     O número sorteado foi: {sorteio}, e ele está em sua cartela!\n')
          else:
               print(f'\n     O número sorteado foi: {sorteio}, e ele não está em sua cartela!\n')


          #Aqui vão alguns avisos para alertar o jogador sobre quantos números faltam.
          if(len(sorteado_na_cartela) == len(suaCartela) - 2):
               print(f'Faltam mais 2 números!')
          elif(len(sorteado_na_cartela) == len(suaCartela) - 1):
               print(f'FALTA SÓ MAIS 1 NÚMERO!')


          #Verifica se a cartela foi preenchida ou não
          if(len(sorteado_na_cartela) == len(suaCartela)):
               print('\n \n BINGO! Você bateu! \n \n')
               break
          

          while(True):

               prosseguir = input('Devo prosseguir com o sorteio? (Responda "S" ou "N") ').upper()
               if(prosseguir != 'N' and prosseguir != 'S'):
                    print('Caractere inválido. Digite novamente.')
               else:
                    break

          if(prosseguir == 'N'):
               break


closeApp = input('Pressione Enter para fechar o app')