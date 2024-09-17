let listaDeNomes = [];
removerAmigo();
function adicionar(){
    // variável armazena o nome que a pessoa colocou
    let nome = document.getElementById('nome-amigo').value
        // verifica se o nome que a pessoa colocou está incluso e adiciona.
        if (listaDeNomes.includes(nome)){
            alert('Ops, nome já incluso na lista.');
            return;
        } else {
            listaDeNomes.push(nome);
        };
    document.getElementById('lista-amigos').textContent = listaDeNomes.join(', ');
    document.getElementById('nome-amigo').value = '';
}

function sortear(){
    embaralha(listaDeNomes);
    let listaSorteio = document.getElementById('lista-sorteio');
    
    if (listaDeNomes.length < 4){
        alert('Ops, sorteios apenas acima de 4 participantes.');
    } else {
    for (let i = 0; i < listaDeNomes.length; i++){
        if (i === listaDeNomes.length - 1){
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaDeNomes[i] + '-->' + listaDeNomes[0] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaDeNomes[i] + '-->' + listaDeNomes[i +1] + '<br>';
        }
    } }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    listaDeNomes = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('nome-amigo').value =   '';
}

 

function removerAmigo(){
    listaDeNomes.addEventListener('click', function(event) {
        event.target.remove();
    });
};