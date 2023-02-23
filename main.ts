input.onButtonPressed(Button.A, function () {
    basic.showNumber(pasos)
    basic.pause(3000)
    basic.clearScreen()
})
let pasos = 0
pasos = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        pasos += 1
    }
})
