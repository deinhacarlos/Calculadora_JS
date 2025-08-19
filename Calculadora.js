function calculadora(opcao, num1, num2) {
    if (opcao === 1) {
        console.log("Resultado da soma: " + (num1 + num2));
    } else if (opcao === 2) {
        console.log("Resultado da subtração: " + (num1 - num2));
    } else if (opcao === 3) {
        console.log("Resultado da multiplicação: " + (num1 * num2));
    } else if (opcao === 4) {
        if (num2 !== 0) {
            console.log("Resultado da divisão: " + (num1 / num2));
        } else {
            console.log("Erro: divisão por zero!");
        }
    } else {
        console.log("Opção inválida!");
    }
}

// Testes
calculadora(1, 10, 5); // soma
calculadora(2, 10, 5); // subtração
calculadora(3, 10, 5); // multiplicação
calculadora(4, 10, 0); // divisão por zero
calculadora(5, 10, 5); // opção inválida
