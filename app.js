function verificador(){
    let valor = document.getElementById ('numero').value;
    valor = parseInt(valor);

    if (valor > 0) {
    alert ('O número escolhido é positivo');
        }else if(valor < 0) {
            alert ('O número escolhido é um número negativo');
                }else{
                    alert ('O número escolhido é igual zero');
                }
}