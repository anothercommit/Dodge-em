let player, vidas;
let x = 0,
    y = 0,
    z = 0;

let leftBorder, rightBorder, downBorder;
let shootButton, proyectile;

function setup() {
    createCanvas(windowWidth, windowHeight);

    player = new Sprite(width / 2, height / 2, 50, 50, "dynamic");
    player.color = "black";

    proyectile = new Group();
    proyectile.color = "red";
    proyectile.vel.y = 20;

    leftBorder = new Sprite(0, height / 2, 50, height, "static");
    rightBorder = new Sprite(width, height / 2, 50, height, "static");
    downBorder = new Sprite(width / 2, height, width, 50, "static");

    shootButton = createButton("shoot");
    shootButton.position(width / 3, height - height / 4);
    shootButton.size(200, 200);
    shootButton.mousePressed(shoot);
}

function draw() {
    background(235);
    // player.vel.x = x;

    if (kb.presses(" ")) shoot();

    if (kb.presses("a")) player.position.x -= 4;
    else if (kb.presses("d")) player.position.x += 4;

    if (kb.presses("w")) player.position.y += 4;
    else if (kb.presses("s")) player.position.y -= 4;
}

function shoot() {
    new proyectile.Sprite(player.position.x, player.position.y - 100, 20, 20);
}

function gameOverScreen() {
    playerState = DEAD;
    background(0);

    player.color = color(0, 0, 255);

    textSize(50);
    fill(255);
    textAlign(CENTER);
    text("Game Over", width / 2, height / 2);
}

// window.addEventListener("devicemotion", function (e) {
//     x = parseInt(e.accelerationIncludingGravity.x) * -2;
//     y = parseInt(e.accelerationIncludingGravity.y);
//     z = parseInt(e.accelerationIncludingGravity.z);
// });

window.addEventListener(
    "touchstart",
    (e) => {
        for (let i = 0; i < e.touches.length; i++) {
            console.log(`touchpoint[${i}].screenX = ${e.touches[i].screenX}`);
            console.log(`touchpoint[${i}].screenY = ${e.touches[i].screenY}`);
        }

        if (touchpoint[O].screenX > width / 2) player.position.y -= 10;
        else if (touchpoint[O].screenX < width / 2) player.position.y += 10;
    },
    false
);
