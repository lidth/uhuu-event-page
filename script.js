let sobretext = document.getElementById('sobretext')
let descontostext = document.getElementById('descontostext')
let pvendastext = document.getElementById('pvendastext')


function moditexto(elemento){
    
    if(elemento.style.textDecoration == '' || elemento.style.textDecoration == 'none'){
        elemento.style.textDecoration = 'underline'
    }else if(elemento.style.textDecoration == 'underline'){
        elemento.style.textDecoration = 'none'
    }
}

sobretext.addEventListener("click", function(){
    moditexto(sobretext)
    })

descontostext.addEventListener("click", function(){
    moditexto(descontostext)
})

pvendastext.addEventListener("click", function(){
    moditexto(pvendastext)
})