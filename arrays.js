let Team1 = 0
let Team2 = 0
let index = 0
let list = ["Dead", "Angel", "Teacher", "Tree"];
input.onButtonPressed(Button.AB, function () {
    index = Math.randomRange(0, 4)
    basic.showIcon(IconNames.Target)
    basic.pause(200)
    basic.showNumber(5)
    basic.pause(200)
    basic.showNumber(4)
    basic.pause(200)
    basic.showNumber(3)
    basic.pause(200)
    basic.showNumber(2)
    basic.pause(200)
    basic.showNumber(1)
    basic.pause(100)
    basic.showString(list[index])
})
input.onButtonPressed(Button.A, function () {
    Team1 = + 1
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    Team2 = + 1
    basic.showIcon(IconNames.Ghost)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("T1 score")
    basic.showNumber(Team1)
    basic.pause(300)
    basic.showString("T2 score")
    basic.showNumber(200)
    basic.showNumber(Team2)
})
