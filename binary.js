let decimal = 0
let binary = ""
input.onButtonPressed(Button.A, function () {
    binary = binary + 1
    basic.showString(binary)
    decimal = decimal * 2 + 1
})
input.onButtonPressed(Button.B, function () {
    binary = binary + 0
    basic.showString(binary)
    decimal = decimal * 2
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(decimal)
    basic.pause(300)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    binary = " "
    decimal = 0
})
