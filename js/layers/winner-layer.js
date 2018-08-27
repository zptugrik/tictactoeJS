function CreateWinnerLayer() {
    this.mainLayer = new Layer("winner-layer");

    this.isWinner = true;
    this.text = new Text(winnerSign);
    this.mainLayer.AddChild(this.text);

    let buttonMenu = new Button(menuButtonConfig);
    this.mainLayer.AddChild(buttonMenu);
}
CreateWinnerLayer.prototype = Layer.prototype;
CreateWinnerLayer.prototype.SignDecorator = function(){
    this.text.label = this.isWinner
        ? game.game_layer.text.label + " Won"
        : "Nobody Won";
}
