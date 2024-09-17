let numeroEscolhido = parseInt(prompt('escolha um numero'));
adivinhaNumero(numeroEscolhido);


function adivinhaNumero(n){
    if( n > 0){
        alert('O número que voce escolheu é positivo!')
    } else if (n < 0) {
        alert('O número que voce escolheu é negativo!');
    } else if (n === 0){
        alert('O número que voce escolheu é zero!');
    }
}