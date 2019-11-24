class Stats {
    constructor(){
        this.gameResults = [{
            win:true,
            bet:10
        },{
            win:false,
            bet:-2
        }];

    }
    addGameResult(isWin, bet){
        let gameResult = {
            win:isWin,
            bet:bet
        }
        this.gameResults.push(gameResult);
    }
    showGameStatistics(){
        let numberOfGames = this.gameResults.length;
        let wonGames= this.gameResults.filter(n => n.win).length;
        let lostGames= this.gameResults.filter(n => !n.win).length;
        return[numberOfGames, wonGames, lostGames];
    }
}