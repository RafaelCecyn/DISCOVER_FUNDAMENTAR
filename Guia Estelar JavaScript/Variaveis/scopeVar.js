/*
    Var é Global e local
    Hoisting
 */

console.log('Existe o valor de x', x) // undefined

{
    var x = 0;
}

console.log('Existe o valor de x', x) // 0
