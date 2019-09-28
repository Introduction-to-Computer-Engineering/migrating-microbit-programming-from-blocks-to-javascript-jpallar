let Sprite: game.LedSprite = null
let index = null
let yindex = null
input.onButtonPressed(Button.A, function () {
   for (let i = 0; i < 4; i++){
       sprite.move(4)
       sprite.turn(Direction.Right, 90)
       basic.pause(100)
   }
})
basic.forever(function () {
 for (let yindex = 0; yindex <=4; yindex++){
   for (let xindex = 0; xindex <= 4; xindex++){
       led.plot(xindex, 0)
       basic.pause(100)
       led.unplot(xindex, 0)
       basic.pause(100)
   }
 } 
})
//Loops: Led seizure
//Mini Project Fidget game
let Dot: game.LedSprite = null
let Coin: game.LedSprite = null
let GameOn = false
input.onButtonPressed(Button.AB, function () {
game.setScore(0)
Dot = game.createSprite(2, 2)
while (GameOn = true) {
   basic.pause(100)
}
})
input.onButtonPressed(Button.A, function () {
if (GameOn == true) {
   Dot.change(LedSpriteProperty.X, -1)
}
})
input.onButtonPressed(Button.B, function () {
if (GameOn == true) {
   Dot.change(LedSpriteProperty.X, 1)
}
})
input.onGesture(Gesture.LogoUp, function () {
if (GameOn == true) {
   Dot.change(LedSpriteProperty.Y, 1)
}
})
input.onGesture(Gesture.LogoDown, function () {
if (GameOn == true) {
   Dot.change(LedSpriteProperty.Y, -1)
}
})
basic.forever(function () {
   basic.pause(Math.randomRange(200, 600))
   if (GameOn == true) {
       Coin = game.createSprite(3, 0)
       basic.pause(200)
       while (GameOn == true) {
           if (Dot.isTouching(Coin)) {
               game.gameOver()
               basic.showString("End")
               basic.showLeds(`
                   . . . . .
                   . # . # .
                   . . . . .
                   # . . . #
                   . # # # .
                   `) 
           }
           else{
               for (let Coin = 0; Coin < 4; Coin++) {
              
               Coin.change(LedSpriteProperty.X, Math.randomRange(0, 5))
               basic.pause(200)
               Coin.change(LedSpriteProperty.Y, Math.randomRange(0, 5))
               basic.pause(200)
               }
           }
       }
   }
}
})
