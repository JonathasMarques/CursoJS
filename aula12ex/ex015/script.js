function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var formAno = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (formAno.value.length == 0 || Number(formAno.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!")
  } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
                if (idade >= 0 && idade < 13) {
                    //crinaça
                    img.setAttribute('src', 'crianca_masculino.png')
                } else if (idade < 21) {
                    //jovem
                    img.setAttribute('src', 'jovem_masculino.png')
                } else if (idade < 50) {
                    //adulto
                    img.setAttribute('src', 'adulto_masculino.png')
                } else {
                    //idoso
                    img.setAttribute('src', 'idoso_masculino.png')
                }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
                if (idade >= 0 && idade < 13) {
                //criança
                img.setAttribute('src', 'crianca_feminina.png')
                } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem_feminina.png')
                } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulta_Feminino.png')
                } else {
                //idoso
                img.setAttribute('src', 'idosa_feminina.png')
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)

        //res.innerHTML = `Idade calculada: ${idade}`

  }
}