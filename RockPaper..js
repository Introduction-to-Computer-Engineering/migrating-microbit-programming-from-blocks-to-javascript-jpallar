let Hand = null
let Player1 = null
let Player2 = null
input.onGesture(Gesture.Shake, function () {
                       Math.random(0, 3)
                       if (Hand == 1) {
                           basic.showLeds(`
           # # # # #
           # . . . #
           # . . . #
           # . . . #
           # # # # #
           `)
           } else if (Hand == 2) {
                               basic.showLeds(`
                   . . . . .
                   . # # # .
                   . # # # .
                   . # # # .
                   . . . . .
                   `) 
              } else (Hand == 3) {
                                   basic.showLeds(`
                       # # . . #
                       # # . # .
                       . . # . .
                       # # . # .
                       # # . . #
                       `)
                               }
                           }
 
 
                       }
                   })
       input.onButtonPressed(Button.A, function () {
           game.addScore(1)
           basic.pause(200)
            basic.showString("P1 Wins:")
           basic.showNumber(Score)
           })
       input.onButtonPressed(Button.B, function () {
           game.addScore(1)
           basic.pause(200)
           basic.showString("P2 Wins:")
           basic.showNumber(Score)
       })
