let player = document.getElementById('player');
let npc = document.getElementById('npc');

let npcPosition = npc.getBoundingClientRect();
let npcLeft = npcPosition.left;
let npcRight = npcPosition.right;
let npcTop = npcPosition.top;
let npcBottom = npcPosition.bottom;

let playerPosition = player.getBoundingClientRect();
let playerLeft = playerPosition.left;
let playerRight = playerPosition.right;
let playerTop = playerPosition.top;
let playerBottom = playerPosition.bottom;

let gameOver = () => {
    alert('Game Over!');
};

let checkCollision = () => {
    if (
        playerRight > npcLeft &&
        playerLeft < npcRight &&
        playerBottom > npcTop &&
        playerTop < npcBottom
    ) {
        gameOver();
    }
};




let movePlayer = (direction) => {
    switch (direction) {
        case 'up':
            player.style.top = playerTop - 5 + 'px';
            break;
        case 'down':
            player.style.top = playerTop + 5 + 'px';
            break;
        case 'left':
            player.style.left = playerLeft - 5 + 'px';
            break;
        case 'right':
            player.style.left = playerLeft + 5 + 'px';
            break;
    }
};

let upBtn = document.getElementById('up');
let downBtn = document.getElementById('down');
let leftBtn = document.getElementById('left');
let rightBtn = document.getElementById('right');

upBtn.onclick = () => movePlayer('up');
downBtn.onclick = () => movePlayer('down');
leftBtn.onclick = () => movePlayer('left');
rightBtn.onclick = () => movePlayer('right');


let gameArea = document.querySelector('body');
let gameAreaPosition = gameArea.getBoundingClientRect();
let gameAreaWidth = gameArea
