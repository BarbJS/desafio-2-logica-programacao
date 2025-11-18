# 🎮 Calculadora de Partidas Rankeadas

Este projeto consiste em uma solução lógica desenvolvida em JavaScript para classificar o nível de um herói com base no seu saldo de vitórias e derrotas em partidas rankeadas.


## 📝 Descrição

O sistema recebe a quantidade de vitórias e derrotas de um jogador, calcula o saldo total e determina o seu ranking atual baseando-se em faixas de valores pré-definidas. Este projeto foi desenvolvido para praticar conceitos fundamentais de programação e lógica de algoritmos.

## 🎯 Objetivos

O principal objetivo deste desafio é aplicar conhecimentos em: 
- Declaração e uso de Variáveis;

- Operadores aritméticos e relacionais;

- Laços de repetição para processar múltiplos casos;

- Estruturas de decisões (if, else if);

- Criação e chamada de Funções com parâmetros e retorno do resultado final.

## 📊 Regras de Negócio

O nível do jogador é determinado pelo resultado da operação: (Vitórias - Derrotas), obedecendo as condições pré-determinadas:
Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal.

## 🚀 Como o Script Funciona

1. Definição da Função: O script possui uma função chamada calcularNivel que aceita dois parâmetros: vitorias e derrotas.
2. Cálculo: Internamente, em sua lógica, a função subtrai as derrotas das vitórias para encontrar o saldo.
3. Verificação: O saldo passa por uma estrutura condicional que verifica em qual faixa de ranking ele se encaixa.
4. Saída: A função retorna uma mensagem formatada informando o saldo e o nível correspondente.
5. Execução em Lote: O código utiliza um laço de repetição para simular um histórico de partidas, permitindo testar vários cenários de uma única vez e exibindo o resultado final.

## 💻 Como Executar o Projeto

- Pré-requisitos: Você precisa ter o Node.js instalado em sua máquina para rodar o script index.js via terminal, ou pode executar diretamente no console do seu navegador. 
- Exemplo de Saída: Ao executar o script, o terminal exibirá mensagens no seguinte padrão: "O Herói tem de saldo de **85** está no nível de **Diamante**".
