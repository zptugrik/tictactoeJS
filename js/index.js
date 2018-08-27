let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let game = new Game();

game.ChangeGameState(STATES.LOAD_ASSETS);

