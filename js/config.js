//assets names
let ASSETS = new Object();
ASSETS.MENU_BACKGROUND = "assets/menu-background.jpg";

let ASSETS_MANAGER = new AssetsManager();
ASSETS_MANAGER.QueueDownload(ASSETS.MENU_BACKGROUND);

// game states
let STATES = new Object();
STATES.LOAD_ASSETS = "load_assets";
STATES.GAME_LAYERS_INIT = "game_layers_init";
STATES.GAME_MENU = "game_menu";
STATES.GAME_ADVERTISING = "game_advertising";
STATES.GAME_START = "game_start";
STATES.GAME_WINNER = "game_winner";

//menu buttons
let playButtonConfig = {
    lable: "Play",
    position: {x: 170, y: 180},
    backgroundColor: "green",
    textColor: "white",
    OnClick: function(){
        game.ChangeGameState(STATES.GAME_ADVERTISING);
    }
}

let exitButtonConfig = {
    lable: "Exit",
    position: {x: 350, y: 180},
    backgroundColor: "red",
    textColor: "white",
    OnClick: function(){
        window.location.replace("https:/youtube.com");
    }
}

let gameButtonConfig = {
    lable: " ",
    position: {x: 190, y: -95},
    backgroundColor: "red",
    textColor: "white",
    width: 100,
    height: 100
    //transparent: true,
}

let playerSign = {
    lable: "Player X",
    position: {x: 20, y: 50},
    font: "42px Arial"
}

let winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

//menu button
let menuButtonConfig = {
    lable: "Menu",
    position: {x: 270, y: 180},
    backgroundColor: "green",
    textColor: "white",
    OnClick: function(){
        game.ChangeGameState(STATES.GAME_MENU);
    }
}

let winnerSign = {
    lable: "Player X",
    position: {x: 200, y: 150},
    font: "42px Arial"
}
