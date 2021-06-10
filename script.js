function carregar() {
  var msg = window.document.getElementById("msg");
  var status = window.document.getElementById ("status")
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas ! `;

  if (hora >= 0 && hora < 12) {
    //BOM DIA !
    img.src = `fotomanha2.png`
    status.innerHTML = 'Bom Dia !'
    document.body.style.background = `#e2cd9f`
  } else if (hora >= 12 && hora <= 18) {
    //BOA TARDE !
    img.src = `fototarde2.png`
    status.innerHTML = 'Bom Tarde !'
    document.body.style.background =`#b9846f`
  } else {
    //BOA NOITE!
    img.src = `fotonoite2.png`
    status.innerHTML = 'Boa Noite !'
    document.body.style.background = `#515154`
  }
}
