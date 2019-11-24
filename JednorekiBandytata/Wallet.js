class Wallet {
    constructor(money =200){
        let _money = money;
        this.getWalletValue = () => _money;
        this.checkCanPlay = value => value<=_money?true:false;
        this.changeWalletValue = (value, type)=>{
            debugger
            if(!isNaN(value) && typeof value ==="number"){
                if(type==='+')
                    return _money+=value;
                
                else if(type==='-')
                    return _money-=value;
                
                else
                   throw new Error("Nieprawidłowy typ działania");
            }
            else{
                console.log(typeof value);
                throw new Error("Nieprawidłowa liczba");
            }
        }
    }
}

const wallet = new Wallet(100);