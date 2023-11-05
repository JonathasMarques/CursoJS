let amigo = {  // objetos em javaScript
    nome: 'joão',
    sexo: 'M',
    peso: 65.7,
    engordar(p=0){ // pode colocar funções dentro de variaveis 
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)