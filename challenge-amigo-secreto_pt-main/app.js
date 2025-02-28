// Array para armazenar os nomes dos amigos

const amigos = [];
let sorteioFinalizado = false;

// Função para adicionar um amigo à lista

function adicionarAmigo() {
    if (sorteioFinalizado) {
        alert('O sorteio já foi finalizado. Não é possível adicionar mais amigos.');
        return;
    }

    const nomeInput = document.getElementById('amigo').value.trim();

    if (nomeInput !== '') {
        if (amigos.includes(nomeInput)) {
            alert('Esse nome já foi incluído, inclua outro nome ou apelido.');
            return;
        }
        amigos.push(nomeInput);

        const novoItem = document.createElement('li');
        novoItem.textContent = nomeInput;

        const listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.appendChild(novoItem);

        document.getElementById('amigo').value = '';
    } else {
        alert('Por favor, digite um nome!');
    }
}

// Adicionar amigos usando a tecla "Enter"

document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});

// Função para sortear um amigo secreto

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione amigos antes de sortear!');
        return;
    }
    if (sorteioFinalizado) {
        alert('Você já sorteou! Reinicie o sorteio para sortear novamente.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Você sorteou: ${amigoSorteado}</li>`;

// O codigo foi feito para permitir apenas um sorteio por lista, no caso de tirar a opção de reinicio do sorteio, esta função evita que a mesma pessoa seja sorteada varias vezes

    amigos.splice(indiceSorteado, 1);
    sorteioFinalizado = true;
}

// Função para reiniciar o sorteio

function reiniciarSorteio() {
    amigos.length = 0;
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    sorteioFinalizado = false;
    alert('O sorteio foi reiniciado! Você pode adicionar novos amigos.');
}