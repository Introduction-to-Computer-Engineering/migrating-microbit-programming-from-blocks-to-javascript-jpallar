radio.setGroup(1)
basic.showString("M C")
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
})
radio.onReceivedNumber(function (recievedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    } else if (receivedNumber == 2) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.Sword)
    }
})
