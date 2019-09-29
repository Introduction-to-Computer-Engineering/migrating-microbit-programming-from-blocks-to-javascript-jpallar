let Player1Score = 0
let Player2Score = 0
let CoinSideA = false
let CoinSideB  false
input.onGesture(Gesture.Shake, function () {
    CoinSideA = Math.randomBoolean()
    CoinSideB = Math.randomBoolean()
    let Player1Score = 0
    let Player2Score = 0
    if (CoinSideA == CoinSideB) {
        basic.showLeds(`
            . # # . .
            # . # . .
            . . # . .
            . . # . .
            # # # # #
            `)
        basic.pause(200)
        Player1Score =+ 1
    } else {
        basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
        basic.pause(200)
        Player2Score =+ 1
        }
})
