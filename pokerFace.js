basic.showLeds(`
   . . . . .
   . # . # .
   . . . . .
   # # # # #
   . . . . .
   `)
basic.clearScreen()
basic.pause(500)
basica.showLeds(`
   . # . # .
   . . . . .
   # . . . #
   . # # # .
   . . . . .
`)
input.buttonIsPressed(button.A, function () {
   basic.showString("Pokerface")
   basic.clearScreen()
   basic.pause(200)
   basic.showLeds(`
           # . . . #
           . . # . .
           . . . . .
           # # # # #
           . . . . .
           `)
}
