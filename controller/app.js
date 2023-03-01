
// classe do cadastro da despesa
class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }
    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] == '' || this[i] == null){
                return false
            }
        }
        return true
    }
}

class Bd{
    constructor(){
        // inicializa o primeiro id em 0 se for nulo
        let id = localStorage.getItem('id')

        if (id === null){
            localStorage.setItem('id', 0)
        }
    }

    getProximoId(){
        // controla os ids das despesas, acrescentando 1 ao id a cada nova gravação
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    gravar(d){

        // executa a função getProximoId, onde acrescenta o valor do id + 1
        let id = this.getProximoId()

        // seta o item no id informado
        localStorage.setItem(id , JSON.stringify(d))

        
        localStorage.setItem('id', id)
    }

    recuperarTodosRegistros(){
        //array de despesas
        let despesas = Array()
        let id = localStorage.getItem('id')
        // recupera as despesas cadastradas no localStorage
        for(let i = 1; i <= id; i++){
            let despesa = JSON.parse(localStorage.getItem(i))

            if(despesa === null){
                continue
            }

            despesas.push(despesa)
        }
        return despesas
    }
}

let bd = new Bd()

// Consulta

function carregaListaDespesas(){
    let despesas = Array()
    despesas = bd.recuperarTodosRegistros()
    // selecionando o elemento tbody
    let listaDespesas = document.getElementById("listaDespesas")

    // percorrer o array despesas, listando cada despesa de forma dinamica
    despesas.forEach(function(d){
        // criando a linha tr
        let linha = listaDespesas.insertRow()
        // criar a coluna td
        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`

        // ajustar tipo
        switch(d.tipo){
            case '1': d.tipo = 'Alimentação'
                break
            case '2': d.tipo = 'Educação'
                break
            case '3': d.tipo = 'Lazer'
                break
            case '4': d.tipo = 'Saúde'
                break
            case '5': d.tipo = 'Transporte'
                break
        }
        linha.insertCell(1).innerHTML = d.tipo

        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = `R$: ${d.valor}`
    })
}

// botão de adicionar
let btnAdd = document.getElementById('btnAdd')

if(btnAdd) {
    btnAdd.addEventListener("click", function(){
        let ano = document.getElementById('ano')
        let mes = document.getElementById('mes')
        let dia = document.getElementById('dia')
        let tipo = document.getElementById('tipo')
        let descricao = document.getElementById('descricao')
        let valor = document.getElementById('valor')

        let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)
        
        // caso os dados sejam validos, adiciona na lista a despesa
        despesa.validarDados() ? (bd.gravar(despesa),$('#sucessoGravacao').modal('show') ) : $('#erroGravacao').modal('show')
    })
}






