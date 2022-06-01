Function verificar(){
            Var data = new Date()
            Var hora = date.getFullYear() //ano de 4 digito
            Var fano = document.getElementById(“txtano”)
            Var res = document.getElementeById(“res”)
            If (fano.value.lenght  == 0 || number(fano.value) > ano){
                Window.alert(“[ERRO] verifique os dados e tente novamente!)
     } else {
          Var fsex = document.getElementByName(“redsex”)
         Var idade = ano – number(fano.value)
         Var genero = “ “
         Var img = document.createElement(“img”)
         Img.setAttribute(“id”, “foto”)//colocar foto no site
         If (fsex[0].checked){
                Genero = “homen”
              If (idade >= 0 && idade < 10){//criança
                  Img.setAttribute(“src”, “foto-bebe-m.png”)
              }else if(idade < 21){//jovem
                  Img.setAttribute(“src”, “foto-joven-m.png”)
              }else if(idade < 50){//adulto
                  Img.setAttribute(“src”, “foto-adulto-m.png”)
              }else {//idoso
                  Img.setAttribute(“src”, “foto-idiso-m.png”)
              }
         }else if (fsex[1].checked){
               Genero = “mulher”
              If (idade >= 0 && idade < 10){//criança
                  Img.setAttribute(“src”, “foto-bebe-f.png”)
              }else if(idade < 21){//jovem
                  Img.setAttribute(“src”, “foto-jovem-f.png”)
              }else if(idade < 50){//adulto
                   Img.setAttribute(“src”, “foto-adulto-f.png”)
              }else {//idoso
                  Img.setAttribute(“src”, “foto-idoso-f.png”)
              }
         }
         Res.style.textAlign = “center”
         Res.innerHTML = “detequitamos ${genero} com {idade} ano.”
         Res.appendChiId(“img”)
     }
}
