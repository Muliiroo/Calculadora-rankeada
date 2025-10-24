// 🚀 Calculadora de Partidas Rankeadas
// Autor: Murilo de Sousa Lourenço
// Projeto DIO - Variáveis, Operadores, Laços e Funções

function calcularRank(vitorias, derrotas) {
    // Cálculo do saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estrutura de decisão para determinar o nível
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna a mensagem formatada
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de uso com loop para testar vários resultados
for (let i = 0; i <= 110; i += 20) {
    console.log(calcularRank(i, 5)); // Testando várias combinações
}

// Exemplo direto
console.log(calcularRank(87, 15)); // Teste com valores personalizados
