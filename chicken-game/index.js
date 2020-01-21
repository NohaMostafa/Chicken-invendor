var x, hero = {
        left: 575,
        top: 700
    },
    counter = 0,
    missiles = [],
    enemies = [{
        left: 200,
        top: 100
    }, {
        left: 300,
        top: 100
    }, {
        left: 400,
        top: 100
    }, {
        left: 500,
        top: 100
    }, {
        left: 600,
        top: 100
    }, {
        left: 700,
        top: 100
    }, {
        left: 800,
        top: 100
    }, {
        left: 900,
        top: 100
    }, {
        left: 200,
        top: 175
    }, {
        left: 300,
        top: 175
    }, {
        left: 400,
        top: 175
    }, {
        left: 500,
        top: 175
    }, {
        left: 600,
        top: 175
    }, {
        left: 700,
        top: 175
    }, {
        left: 800,
        top: 175
    }, {
        left: 900,
        top: 175
    }];

function drawHero() {
    document.getElementById("hero").style.left = hero.left + "px", document.getElementById("hero").style.top = hero.top + "px"
}

function drawMissiles() {
    document.getElementById("missiles").innerHTML = "";
    for (var e = 0; e < missiles.length; e++) document.getElementById("missiles").innerHTML += 
    `<div class='missile1' style='left:${missiles[e].left}px; top:${missiles[e].top}px'></div>`
}

function moveMissiles() {
    for (var e = 0; e < missiles.length; e++) missiles[e].top = missiles[e].top - 20
}

function drawEnemies() {
    document.getElementById("enemies").innerHTML = "";
    for (var e = 0; e < enemies.length; e++) document.getElementById("enemies").innerHTML += `<div class='enemy' style='left:${enemies[e].left}px; top:${enemies[e].top}px'></div>`
}

function moveEnemies() {
    for (var e = 0; e < enemies.length; e++) enemies[e].top = enemies[e].top + 1, enemies[e].top == hero.top - 50 && (clearTimeout(x), document.getElementById("restart").classList.remove("d-none"))
}

function collisionDetection() {
    for (var e = 0; e < enemies.length; e++)
        for (var t = 0; t < missiles.length; t++) missiles[t].left >= enemies[e].left && missiles[t].left <= enemies[e].left + 50 && missiles[t].top <= enemies[e].top + 50 && missiles[t].top >= enemies[e].top && (enemies.splice(e, 1), missiles.splice(t, 1), counter++, document.getElementById("counter").innerHTML = "SCORE:" + counter)
}

function gameLoop() {
    x = setTimeout(gameLoop, 70), moveMissiles(), drawMissiles(), moveEnemies(), drawEnemies(), collisionDetection()
}
document.onkeydown = function(e) {
    37 === e.keyCode && (hero.left = hero.left - 10), 39 === e.keyCode && (hero.left = hero.left + 10), 32 === e.keyCode && (missiles.push({
        left: hero.left + 20,
        top: hero.top - 20
    }), drawMissiles()), drawHero()
}, document.getElementById("restart").addEventListener("click", function() {
    document.getElementById("restart").classList.add("d-none"), location.reload()
}), gameLoop();