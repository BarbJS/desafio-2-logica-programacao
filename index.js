// Função principal que calcula o Rank
function calcularNivel(vitorias, derrotas) {
    // Variável para guardar o cálculo do saldo de vitórias.
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estrutura de decisão para definir o nível.
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";     // saldoVitorias >= 101
    } 

    // Retorna um texto formatado com o resultado.
    return `O Herói tem de saldo de **${saldoVitorias}** e está no nível de **${nivel}**`;
}

// --- Área de Execução ---

// Simulação de alguns dados de jogadores fictícios (Vitórias, Derrotas).
let historicoDePartidas = [
    { vitorias: 8, derrotas: 3 },   // Caso Ferro
    { vitorias: 60, derrotas: 20 }, // Caso Prata
    { vitorias: 150, derrotas: 5 }  // Caso Imortal
];

// Laço de repetição para processar cada jogador da lista acima.
for (let i = 0; i < historicoDePartidas.length; i++) {
    let jogador = historicoDePartidas[i];
    
    // Chamando a função e guardando o resultado numa variável.
    let resultadoFinal = calcularNivel(jogador.vitorias, jogador.derrotas);
    
    // Saída e chamada do resultado final.
    console.log(resultadoFinal);
}