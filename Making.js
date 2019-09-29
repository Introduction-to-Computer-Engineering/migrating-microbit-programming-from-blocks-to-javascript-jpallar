basic.forever(function () {
       basic.clearScreen()
   })
 
input.onButtonPressed(button.A, function () {
       basic.showLeds(`
       . . . . .
       . # . # .
       . . # . .
       # . . . #
       . # # # .
       `)
   }
input.onButtonPressed(Button.B, function () {
           basic.showLeds(`
       . . . . .
       . # . # .
       . . # . .
       . # # # .
       # . . . #
       `)
