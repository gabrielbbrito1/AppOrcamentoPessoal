
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
        // seta o item no id informado
        localStorage.setItem(id , JSON.stringify(d))

        // executa a função getProximoId, onde acrescenta o valor do id + 1
        let id = this.getProximoId()

        localStorage.setItem('id', id)
    }
}

let bd = new Bd()

let btnAdd = document.getElementById('btnAdd')


btnAdd.addEventListener("click", function(){
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)
    despesa.validarDados()

    despesa.validarDados() ? bd.gravar(despesa) : console.log('Erro')
})






