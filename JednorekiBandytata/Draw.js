class Draw{
    constructor() {
        this.colors = ["red","green","blue"];
        let _result = this.drawResult();
        this.getResult = () => _result;
    }

    drawResult(){
        let color = []
        for (let i = 0; i < this.colors.length; i++){
            color.push(this.colors[Math.floor(Math.random()* this.colors.length)])
        }
        return color;
    }
}
