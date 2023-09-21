function animarBarraProgresso()
{
    //declarando as variaveis e atribuindo os valores atraves dos elementos da DOM 
    var progresso = 0;
    var barra = $(".progress-bar");
    var barraProgresso = $(".progress");

    var intervalo = setInterval(function(){
        if(progresso > 100)
        {
            clearInterval(intervalo);
            barraProgresso.hide();
            document.body.style.backgroundImage = `url("https://i.ytimg.com/vi/HY8ktCsZ-Ts/maxresdefault.jpg")`;
        }
        else{
            progresso += 1,8;
            barra.css("width", progresso + "%");
        }
    },60);
}
