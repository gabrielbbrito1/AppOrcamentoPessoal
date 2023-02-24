let btnAdd = document.getElementById('btnAdd')


btnAdd.addEventListener("click", function(){
    let ano = document.getElementById('ano')
    let dia = document.getElementById('dia')
    let mes = document.getElementById('mes')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    console.log(ano.value, dia.value, mes.value, tipo.value, descricao.value, valor.value)
})