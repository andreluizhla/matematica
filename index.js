var a = document.getElementById('a')
var b = document.getElementById('b')
var c = document.getElementById('c')
var delta = 0
var x1 = 0
var x2 = 0
var res = document.getElementById('res')
a.focus()

function eventA(event) {
    if (event.key === 'Enter'){
        if (a.value.length == 0){
            a.value = 1
        }
        if (a.value == 0){
            res.innerHTML = ''
            a.value = 1
            console.error('Ajustado o valor de A para: 1')
            res.innerHTML += '<p>O valor de A foi ajustado automaticamente para 1, pois A tem que ser diferente de 0</p>'
            res.innerHTML += '<p>Explicação: Quando o valor de A for igual a 0: 0 vezes x² resultaria em 0 não importa o valor de x, sendo então uma Equação de Primeiro Grau.</p>'
        } 
        b.focus()
    }
}

function eventB(event) {
    if (event.key === 'Enter'){
        if (b.value.length == 0){
            b.value = 0
        }
        if (a.value == 0){
            res.innerHTML = ''
            a.value = 1
            console.error('Ajustado o valor de A para: 1')
            res.innerHTML += '<p>O valor de A foi ajustado automaticamente para 1, pois A tem que ser diferente de 0</p>'
            res.innerHTML += '<p>Explicação: Quando o valor de A for igual a 0: 0 vezes x² resultaria em 0 não importa o valor de x, sendo então uma Equação de Primeiro Grau.</p>'
        } 
        c.focus()
    }
}

function eventC(event){
    if(event.key === 'Enter'){
        if (c.value.length == 0){
            c.value = 0
        }
        if (a.value == 0){
            res.innerHTML = ''
            a.value = 1
            console.error('Ajustado o valor de A para: 1')
            res.innerHTML += '<p>O valor de A foi ajustado automaticamente para 1, pois A tem que ser diferente de 0</p>'
            res.innerHTML += '<p>Explicação: Quando o valor de A for igual a 0: 0 vezes x² resultaria em 0 não importa o valor de x, sendo então uma Equação de Primeiro Grau.</p>'
        } 
        verificar()
        a.focus()
    }
}

function equacao(a, b, c){
    
    if (a.value == 1){
        res.innerHTML += `A equação é <strong>x²</strong>`

    } else if(a.value == -1){
        res.innerHTML += `A equação é <strong>- x²</strong>`

    } else {
        res.innerHTML += `A equação é <strong>${a.value}x²</strong>`

    } if(b.value == 1){
        res.innerHTML += `<strong> + x</strong>`

    } else if(b.value == -1){
        res.innerHTML += `<strong> - x</strong>`

    } else if (b.value > 0){
        //Coloca na equação ax² + bx
        res.innerHTML += `<strong> + ${b.value}x</strong>`

    } else if (b.value < 0){
        //Coloca na equação ax² - bx
        res.innerHTML += `<strong>${b.value}x</strong>`

    } else if (b.value == 0){
        //Se caso b = 0 então ficaria: ax² +- c
        res.innerHTML += ''
    } if (c.value > 0) {
        //Coloca na equação + c
        res.innerHTML += `<strong> + ${c.value}</strong>`

    } else if(c.value < 0){
        //Coloca na equação -c
        res.innerHTML += `<strong> ${c.value}</strong>`

    } else if(c.value == 0){
        res.innerHTML += ''

    }
    
    res.innerHTML += '<strong> = 0</strong>'  

    res.innerHTML += `<p>O valor de <strong>A</strong> é <strong>${a.value}</strong></p>`
    
    if (b.value != 0){
        res.innerHTML += `<p>O valor de <strong>B</strong> é <strong>${b.value}</strong></p>`
    } else {
        res.innerHTML += `<p>O valor de <strong>B</strong> é <strong>${b.value}</strong></p>`
    }
    
    if (c.value != 0){
        res.innerHTML += `<p>O valor de <strong>C</strong> é <strong>${c.value}</strong></p>`
    } else {
        res.innerHTML += `<p>O valor de <strong>C</strong> é <strong>${c.value}</strong></p>`
    }
}

function contas(a, b, c){
    delta = b.value ** 2 - 4 * a.value * c.value
    x1 = ((-(b.value)) + Math.sqrt(delta) ) / (2 * a.value)
    x2 = ((-(b.value)) - Math.sqrt(delta) ) / (2 * a.value)
}

function verificar(){

    if (a.value == 0){
        res.innerHTML = ''
        
        console.error('Ajustado o valor de A para: 1')

        res.innerHTML += '<p>O valor de A foi ajustado automaticamente para 1, pois A tem que ser diferente de 0</p>'
        res.innerHTML += '<p>Explicação: Quando o valor de A for igual a 0: 0 vezes x² resultaria em 0 não importa o valor de x, sendo então uma Equação de Primeiro Grau.</p>'

        a.value = 1
    } else {

        res.innerHTML = ''

        contas(a, b, c)

        equacao(a, b, c)
        
        res.innerHTML += `<p>O valor de <strong>Delta</strong> é <strong>${delta}</strong></p>`

        if (delta < 0){
            res.innerHTML += `<p>A equação não possui raiz real, pois Delta é menor que 0</p>`
        } else if (delta > 0){

            if ((x1.toString().split('.')[1] || '').length >= 4){
                var comprimento = 4

            } else{
                var comprimento = 0

            }
            res.innerHTML += `<p>A equação possui <strong>2 soluções reais</strong>, sendo elas: </p>`

            res.innerHTML += `<p>O valor de <strong>x'</strong> que é igual a <strong>${x1.toFixed(comprimento)}</strong></p>`

            res.innerHTML += `<p>O valor de <strong>x"</strong> que é igual a <strong>${x2.toFixed(comprimento)}</strong></p>`
        } else {
            res.innerHTML += `<p>A equação possui somente <strong>1 solução real</strong>, pois Delta é igual a 0</p>`

            res.innerHTML += `<p>A unica solução é <strong>${x1}</strong>`
        }
    }
}