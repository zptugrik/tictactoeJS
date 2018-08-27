function CreateGameLayer() {
    this.turns = ["X", "O"];
    this.turnCounter = 0;

    this.mainLayer = new Layer("game-layer");

    let sideOffset = 110;
    let initX = gameButtonConfig.position.x;

    for( let i = 0; i < 9; i++)
    {
        if(i % 3 == 0)
        {
            gameButtonConfig.position.x = initX;
            gameButtonConfig.position.y += sideOffset;
        }
        gameButtonConfig.position.x += sideOffset;
        let button = new Button(gameButtonConfig);
        button.index = i;
        button.OnClick = function(){
            let that = game.game_layer;
            game.game_layer.FieldsDecorator(this,that.turns[that.turnCounter%2]);
        };
        this.mainLayer.AddChild(button)
    }

    this.text = new Text(playerSign);
    this.mainLayer.AddChild(this.text);


    let field = new Field();
    this.mainLayer.AddChild(field);


}
CreateGameLayer.prototype.SignDecorator = function(value){
    //turn ends - checking if we got a winner
    if(this.CheckWin()){
        this.DisableFieldsDecorator(true);
        game.winner_layer.isWinner = true;
        game.ChangeGameState(STATES.GAME_WINNER);
    }
    else{

        if(this.isMoreMovesExist()){
            this.text.label = this.text.label.substr(0, this.text.label.length - 1);
            this.turnCounter++;
            this.text.label += this.turns[this.turnCounter%2];
        }
        else {
            game.winner_layer.isWinner = false;
            game.ChangeGameState(STATES.GAME_WINNER);
        }
    }
}
CreateGameLayer.prototype.isMoreMovesExist = function(){
    for(let i = 0; i < 9; i++)
    {
        if( this.mainLayer.childs[i].label == " ")
        {
            return true;
        }

    }
    return false;
}
CreateGameLayer.prototype.FieldsDecorator = function(obj, value){
    obj.disabled = true;
    obj.label = value;
    this.SignDecorator(value);
}

CreateGameLayer.prototype.DisableFieldsDecorator = function(bool){
    for(let i = 0; i < 9; i++)
    {
        this.mainLayer.childs[i].disabled = bool;
        if( !bool ) this.mainLayer.childs[i].label = " ";
    }
}

CreateGameLayer.prototype.CleannerDecorator = function(){
    this.DisableFieldsDecorator(false);
    this.turnCounter = 0;
    this.SignDecorator();
}

CreateGameLayer.prototype.CheckWin = function(){
    for (let i = 0; i < winLines.length; i++) {
        let [a, b, c] = winLines[i];
        if (
            this.mainLayer.childs[a].label != " " &&
            this.mainLayer.childs[a].label === this.mainLayer.childs[b].label &&
            this.mainLayer.childs[a].label === this.mainLayer.childs[c].label)
        {
           return true;
        }
    }
    return false;
}

