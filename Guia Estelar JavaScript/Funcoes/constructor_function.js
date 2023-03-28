/*
    Function() Constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name // this está conectado com o rafael
    this.andar = function () {
        return this.name + " está andando"
    }
}

const rafael = new Person("Rafael") // Instanciando o objeto
const lara = new Person("Lara") // Instanciando o objeto
console.log(rafael.name)
console.log(lara.name)
console.log(rafael.andar())
console.log(lara.andar())