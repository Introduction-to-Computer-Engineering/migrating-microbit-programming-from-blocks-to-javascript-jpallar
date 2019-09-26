 let Player1Win = null
           let Player2Win = null
           let GameTie = null
           input.onButtonPressed(Button.A, function () {
               Player1Win += 1
               basic.showString("A")
               basic.clearScreen()
           })
           input.buttonIsPressed(Button.B, function () {
               Player2Win += 1
               basic.showString("B")
               basic.clearScreen()
           }
input.buttonIsPressed(Button.AB, function () {
                   GameTie += 1
                   basic.showString("T")
                   basic.clearScreen()
               }
input.onGesture(Gesture.Shake, function () {
                       basic.showString("Wins:")
                       basic.showLeds(`
      . . # . .
      . # . # .
      . # # # .
      . # . # .
      . # . # .
      `)
                       basic.showNumber(Player1Win)
                       basic.clearScreen()
                       basic.showString("Wins")
                       basic.showLeds(`
          . # # . .
          . # . # .
          . # # #
          . # . # .
          . # # . .
          `)
                       basic.showNumber(Player2Win)
                       basic.clearScreen()
                       basic.showString("Null")
                       basic.showLeds(`
          . . . .
          # # # # #
          . . # . .
          . . # . .
          . . # . .
          `)
                       basic.showNumber(GameTie)
                   })
 
input.onButtonPressed(Button.AB, function () {
                       basic.showString("Games Played:")
                       basic.showNumber(Player1Win + Player2Win + GameTie)
                   })
