// Arrays para armazenar os jogadores, vitórias e derrotas
let jogadores = ["Pablo", "Pedro", "José", "Vitoria", "Josias"]
let vitorias = [8, 15, 55, 85, 120]
let derrotas = [5, 7, 25, 10, 20]

// Função para calcular o saldo de vitórias
function calcularSaldo(vitorias, derrotas){
    return vitorias - derrotas;
}

// Função para determinar o nível de rank com base nas vitórias
function nivelRank(vitorias){

    if(vitorias <= 10){
        return "Ferro";
    }else if(vitorias >= 11 && vitorias <= 20){
        return "Bronze";
    }else if(vitorias >= 21 && vitorias <= 50){
        return "Prata";
    }else if(vitorias >= 51 && vitorias <= 80){
        return "Ouro";
    }else if(vitorias >= 81 && vitorias <= 90){
        return "Diamante";
    }else if(vitorias >= 91 && vitorias <= 100){
        return "Lendàrio";
    }else(vitorias >= 101);{
        return "Imortal";
    }
}

// Função para exibir o saldo e o rank de cada jogador
function exibirRankDosJogadores(){
    for(let i = 0; i < jogadores.length; i++){
        const saldo = calcularSaldo(vitorias[i], derrotas[i])
        const rank = nivelRank(vitorias[i])
        console.log(`O Herói ${jogadores[i]} tem um saldo de ${saldo} e está no nível de ${rank}`)
    }
}

// Exibindo o rank dos jogadores
exibirRankDosJogadores();