class Game{
    constructor(start=500) {
        this.wallet = new Wallet(start);
        this.stats = new Stats();
        document.getElementById("start").addEventListener('click', this.startGame.bind(this));
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.inputBet = document.getElementById('bet');
        this.spanGames = document.querySelector('.score span.number');
        this.spanResult = document.querySelector('.score span.result');
        this.boardsColors =[...document.querySelectorAll('div.color')];
        this.spanWins = document.querySelector('.score span.win');
        this.spanLosses = document.querySelector('.score span.loss');
        this.render();
        this.stats.showGameStatistics();
    }
    render(colors = ["gray", "gray", "gray"],
        walletMoney,
        money = 0,
        bet = 0, 
        stats = [0,0,0], 
        result = true){

        this.boardsColors.forEach((board, i)=>{
            board.style.backgroundColor = colors[i];
        })

        if(result){
            result = `Wygrałeś ${money}`
        }
        else if(result==false || result==""){
            result = `Przegrałeś ${bet}`
        }

        this.spanWallet.textContent = walletMoney;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];
        this.spanResult.textContent = result;
    }
    startGame(){
        if(this.inputBet.value<1){
            return alert("Kwota którą chcesz zagrać musi być większa od 1!");
        }

        const bet = Math.floor(this.inputBet.value);
        if(this.wallet.checkCanPlay(bet)){
            console.log("PLAY");
            this.wallet.changeWalletValue(bet,'-');
            console.log(this.wallet.getWalletValue());
        }
        else
            alert("Masz za mało w portfelu, by dalej grać!");
        

        
        this.draw = new Draw();
        const colors = this.draw.getResult();
        const isWin = Rules.winCheck(colors);
        this.stats.addGameResult(isWin, bet);

        const money = Rules.moneyAfterBet(isWin, bet);
        this.wallet.changeWalletValue(money, '+');
        const hajs = this.wallet.getWalletValue();
        this.render(colors,
            this.wallet.getWalletValue(),
            money,
            bet,
            this.stats.showGameStatistics(),
            isWin)
    }
}
