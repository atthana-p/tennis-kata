//
// Your implementations
//

function updateGameScore(
    player1Points: number,
    player2Points: number
  ): { player1Points: number; player2Points: number } {
    printScore([player1Points, player2Points]);
    return {
      player1Points,
      player2Points,
    };
  }
  
  
  
  function decideGameWinner(gameResult: Game) {
    if (gameResult.player1Point >= 4 && gameResult.player2Point >= 4) {
      if (Math.abs(gameResult.player1Point[0] - gameResult.player1Point[1]) >= 2) {
        return gameResult.player1Point[0] - gameResult.player1Point[1] > 0
          ? 'Player 1'
          : 'Player 2';
      }
    }
  
  }
  
  function printScore(playerScoreArray: number[]) {
    if (!Array.isArray(playerScoreArray)) {
      return;
    }
  
    if (playerScoreArray.length !== 2) {
      return;
    }
  
    if (playerScoreArray.some((score) => score > 3)) {
      if (playerScoreArray[0] === playerScoreArray[1]) {
        return 'deuce';
      } else if (Math.abs(playerScoreArray[0] - playerScoreArray[1]) === 1) {
        return playerScoreArray[0] - playerScoreArray[1] > 0
          ? 'advantage player 1'
          : 'advantage player 2';
      } else {
        
      }
    } else {
      const scoreWord = playerScoreArray.map((eachPlayerScore) => {
        switch (eachPlayerScore) {
          case 0:
            return 'love';
          case 1:
            return 'fifteen';
          case 2:
            return 'thirty';
          case 3:
            return 'forty';
          default:
            return;
        }
      });
      return `${scoreWord[0]} - ${scoreWord[1]}`;
    }
  }
  
  interface Game {
    player1Point: number;
    player2Point: number;
  }