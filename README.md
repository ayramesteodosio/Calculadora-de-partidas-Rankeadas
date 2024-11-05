# Calculadora de Partidas Ranqueadas

Este é o projeto **Calculadora de Partidas Ranqueadas**. O código simula o cálculo de saldo de vitórias e derrotas dos jogadores e determina seu nível de rank com base nas vitórias. O projeto foi desenvolvido para facilitar o cálculo e exibição do rank dos jogadores em um jogo competitivo.

## 💡 Sobre o Projeto

Este projeto tem como objetivo calcular e exibir o saldo de vitórias e derrotas de cada jogador, além de atribuir um nível de rank com base nas vitórias. Para isso, são utilizados arrays para armazenar os nomes dos jogadores, suas vitórias e derrotas. O rank é determinado a partir da quantidade de vitórias do jogador.

### Funcionamento

O código possui três funções principais:
1. **calcularSaldo(vitorias, derrotas)**: Calcula o saldo de vitórias (vitórias - derrotas).
2. **nivelRank(vitorias)**: Determina o rank do jogador com base no número de vitórias.
3. **exibirRankDosJogadores()**: Exibe o saldo e o rank de cada jogador no console.

**Níveis de Rank**:
- **Ferro**: Até 10 vitórias
- **Bronze**: De 11 a 20 vitórias
- **Prata**: De 21 a 50 vitórias
- **Ouro**: De 51 a 80 vitórias
- **Diamante**: De 81 a 90 vitórias
- **Lendário**: De 91 a 100 vitórias
- **Imortal**: Acima de 100 vitórias

## 🚀 Como Usar

### Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina para executar este projeto. Caso ainda não tenha, faça o download e instale a partir de: [Node.js](https://nodejs.org/).

### Passos

1. Clone o repositório:

   ```
   git clone https://github.com/seu-usuario/Calculadora-de-partidas-Rankeadas.git
   ```

2. Navegue até o diretório do projeto:

  ```
  cd Calculadora-de-partidas-Rankeadas
  ```
  
3. Execute o código usando Node.js:
  
  ```
  node index.js
  ```

4. O código exibirá no console o saldo e o rank de cada jogador:

 📄 Exemplo de Saída
  ```
  O Herói Pablo tem um saldo de 3 e está no nível de Bronze
  O Herói Pedro tem um saldo de 8 e está no nível de Ouro
  O Herói José tem um saldo de 30 e está no nível de Diamante
  O Herói Vitoria tem um saldo de 75 e está no nível de Lendário
  O Herói Josias tem um saldo de 100 e está no nível de Imortal
  ```

## 🛠️ Tecnologias Usadas

1. **JavaScript:** Utilizado para implementar as funcionalidades de cálculo de saldo e determinação do rank.
2. **Node.js:** Ambiente de execução do JavaScript no backend para rodar o código.

## 🤖 Contribuição
Contribuições são bem-vindas! Se você tiver sugestões de melhorias ou bugs a relatar, fique à vontade para abrir um issue ou enviar um pull request.

## 🔗 Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
