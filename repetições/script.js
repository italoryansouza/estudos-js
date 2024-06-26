//  Estrutura for - for(inci; teste; incremento)
 
// for(var c=1;c <=5; c++) {
//     console.log(c)   
// }

let n = [2, 3, 1, 5, 7, 9]

for(let pos = 0; pos < n.length; pos++){
    console.log(n[pos])
}

// Podemos escrever assim: para cada pos em n

for(let pos in n) {
    console.log(`A posição ${pos} tem o valor ${n[pos]}`)
}

console.log('Procurando a posição do número 5 ...')
console.log(`A posição do número 5 é ${n.indexOf(5)}`)