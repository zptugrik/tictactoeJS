function Game(){
}

Game.prototype.ChangeGameState = function(gameState){
    this.DispatchNewGameState(gameState);
};

Game.prototype.DrawGame = function(){
    this.background_layer.Draw();
    this.menu_layer.Draw();
    this.game_layer.mainLayer.Draw();
    this.winner_layer.mainLayer.Draw();
    window.requestAnimationFrame(this.DrawGame.bind(this));
}

Game.prototype.DispatchNewGameState = function(gameState){
    switch(gameState){
        case STATES.LOAD_ASSETS:
            ASSETS_MANAGER.DownloadAll(this.ChangeGameState.bind(this, STATES.GAME_LAYERS_INIT));
            break;
        case STATES.GAME_LAYERS_INIT:
            this.background_layer = CreateBackgroundLayer();
            this.menu_layer = CreateMenuLayer();
            this.game_layer = new CreateGameLayer();
            this.game_layer.mainLayer.Enable(false);
            this.winner_layer = new CreateWinnerLayer();
            this.winner_layer.mainLayer.Enable(false);
            window.requestAnimationFrame(this.DrawGame.bind(this));
            break;
        case STATES.GAME_MENU:
            this.winner_layer.mainLayer.Enable(false);
            this.game_layer.CleannerDecorator();
            this.menu_layer.Enable(true);
            break;
        case STATES.GAME_ADVERTISING:
            document.getElementById("content").classList.remove("hide-advertise");
            videoContent.play();
            break;
        case STATES.GAME_START:
            this.menu_layer.Enable(false);
            document.getElementById("content").classList.add("hide-advertise");
            this.game_layer.mainLayer.Enable(true);
            break;
        case STATES.GAME_WINNER:
            this.game_layer.mainLayer.Enable(false);
            this.winner_layer.SignDecorator();
            this.winner_layer.mainLayer.Enable(true);
            break;
    }
};