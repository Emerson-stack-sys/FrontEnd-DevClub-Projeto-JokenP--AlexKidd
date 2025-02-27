document.addEventListener("DOMContentLoaded", () => {
     // Selecionando os elementos
     const gameBackground = document.getElementById("game-background");
     const rockBtn = document.getElementById("hands-rock");
     const paperBtn = document.getElementById("hands-paper");
     const scissorsBtn = document.getElementById("hands-scissors");
     const playerScoreDisplay = document.getElementById("player-score");
     const enemyScoreDisplay = document.getElementById("enemy-score");
     const resultMessage = document.getElementById("result-message");
     const resultImage = document.getElementById("result-image");

     function resetGame() {
          playerScore = 0;
          enemyScore = 0;
          playerScoreDisplay.textContent = playerScore;
          enemyScoreDisplay.textContent = enemyScore;
          resultMessage.textContent = "Escolha sua jogada!";
          resultImage.style.display = "none";
          changeBackground(); // Opcional: trocar o fundo ao reiniciar
     }
     // Criando e adicionando botão de reset
     const resetButton = document.createElement("button");
     resetButton.textContent = "Reiniciar Jogo";
     resetButton.id = "reset-game";
     document.body.appendChild(resetButton);

     // Lista de imagens para trocar
     const backgrounds = ["./img/bg1.png", "./img/bg2.png", "./img/bg3.png", "./img/bg4.png", "./img/bg5.png", "./img/bg6.png", "./img/bg7.png", "./img/bg8.png", "./img/bg9.png", "./img/bg10.png"];

     // Variáveis de pontuação
     let playerScore = 0;
     let enemyScore = 0;

     // Definição correta do ENUM `GAME_OPTIONS`
     const GAME_OPTIONS = {
          ROCK: "ROCK ✊",
          PAPER: "PAPER 🖐️",
          SCISSORS: "SCISSORS ✌️"
     };

     const choices = Object.values(GAME_OPTIONS); // Array com os valores do GAME_OPTIONS

     // Função que gera a jogada aleatória do inimigo
     function getEnemyChoice() {
          return choices[Math.floor(Math.random() * choices.length)];
     }

     // Função para trocar a imagem de fundo
     function changeBackground() {
          gameBackground.src = backgrounds[Math.floor(Math.random() * backgrounds.length)];
     }

     // Função para determinar o vencedor
     function determineWinner(playerChoice) {
          const enemyChoice = getEnemyChoice();

          if (!resultMessage) return; // Garante que o código só executa se o elemento existir

          if (playerChoice === enemyChoice) {
               resultMessage.textContent = `Empate! Ambos escolheram ${playerChoice}`;
          } else if (
               (playerChoice === GAME_OPTIONS.ROCK && enemyChoice === GAME_OPTIONS.SCISSORS) ||
               (playerChoice === GAME_OPTIONS.PAPER && enemyChoice === GAME_OPTIONS.ROCK) ||
               (playerChoice === GAME_OPTIONS.SCISSORS && enemyChoice === GAME_OPTIONS.PAPER)
          ) {
               resultMessage.textContent = `Você Venceu! ${playerChoice} venceu ${enemyChoice}`;
               playerScore++;
               playerScoreDisplay.textContent = playerScore;
               resultImage.src = "./img/alex-kidd-win.png";
               resultImage.style.display = "block";
          } else {
               resultMessage.textContent = `Você perdeu para o Junke o Grande! ${enemyChoice} venceu ${playerChoice}`;
               enemyScore++;
               enemyScoreDisplay.textContent = enemyScore;
               resultImage.src = "./img/junke-lose.png";
               resultImage.style.display = "block";
          }
     }

     // Eventos de clique corretos
     rockBtn.addEventListener("click", () => determineWinner(GAME_OPTIONS.ROCK));
     paperBtn.addEventListener("click", () => determineWinner(GAME_OPTIONS.PAPER));
     scissorsBtn.addEventListener("click", () => determineWinner(GAME_OPTIONS.SCISSORS));
     resetButton.addEventListener("click", resetGame);


});

