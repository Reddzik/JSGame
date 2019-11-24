class Rules {
    static moneyAfterBet(isWon=true, bet=0){
        return isWon?bet*3:0; 
    }
    static winCheck(colors){
        if((colors[0]==colors[1] && colors[1] == colors[2]) || (colors[0]!=colors[1] && colors[1] != colors[2] && colors[0]!=colors[2])){
            return true;    
        }
        else
            return false;
    }
}
