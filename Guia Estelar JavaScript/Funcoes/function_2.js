// Função precisa de um retorno
// Se não tiver um return ->>> Retorna indefinido

const sum = function(number1,number2) {
    total = number1 + number2;
    return total;
}

let number1 = 34;
let number2 = 25;

console.log(` a soma é ${sum(number1,number2)}`)
console.log(total) // ->>> Perigo pois pego o total fora do escopo porque não colocamos let,var,const na variável