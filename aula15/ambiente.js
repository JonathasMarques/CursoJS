let num = [5, 8, 2, 9, 3]
num.push(1) // adiciona mais um número no final (obs: cuidado com a sequencia de codigos)
num.sort() // deixa os números em ordem crescente 
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro vetor é ${num[0]}`)
let pos = num.indexOf(7)
if(pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor se encontra na casa ${pos}`) 
}


