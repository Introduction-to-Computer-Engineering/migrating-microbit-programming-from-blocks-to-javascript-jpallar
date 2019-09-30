//My variables
let index = 0
let Ship: game.LedSprite = null
let Wall: game.LedSprite[] = []
let Walls: game.LedSprite[] = []
let Wall0 = 0
let WallX = 0
let Space = 0
game.setScore(0)
//The player's character
Ship = game.createSprite(2, 0)
Ship.set(LedSpriteProperty.Blink, 500)
//Code for the obstacles
WallX = Math.randomRange(0, 4)
for (let index = 0; index < 4; index++) {
    if (index != WallX) {
        Wall.push(game.createSprite(index, 4))
    }
}
basic.forever(function () {
    while (Walls.length < 0 && Walls[0].get(LedSpriteProperty.X) == 0) {
        Walls.removeAt[0].delete()
    }
    for (let Wall of Walls) {
    Wall.change(LedSpriteProperty.Y, -1)
    if (Space % 3 == 0) {
       Wall0 = Math.randomRange(0, 4)
       for (let index = 0; index < 4; index++) {
           if (index != Wall0) {
               Walls.push(game.createSprite(index, 4))
           }
        }
    }
    //Coding a collision.
    for (let Wall of Walls) {
        if (Wall.get(LedSpriteProperty.X) == Ship.get(LedSpriteProperty.X) && Wall.get(LedSpriteProperty/Y) == Ship.get(LedSpriteProperty.Y)) {
            game.gameOver()
            basic.showNumber(game.score)
        }
    }
    Space =+ 1
    basic.pause(200)
    game.addScore(1)
})

//Coding for Led movement
input.onButtonPressed(Button.A, function () {
    Ship.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.A, function () {
    Ship.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.LogoUp, function () {
    Ship.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    Ship.change(LedSpriteProperty.Y, -1)
})



