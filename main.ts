input.onButtonPressed(Button.A, function () {
    makerbit.clearLcd1602()
    makerbit.showStringOnLcd1602("Also do u have ", makerbit.position1602(LcdPosition1602.P0), 16)
    makerbit.showStringOnLcd1602("The kit", makerbit.position1602(LcdPosition1602.P0), 16)
    basic.pause(300)
    makerbit.clearLcd1602()
})
input.onButtonPressed(Button.AB, function () {
    makerbit.clearLcd1602()
    makerbit.showStringOnLcd1602("I have the ", makerbit.position1602(LcdPosition1602.P0), 16)
    makerbit.showStringOnLcd1602("Adeept kit", makerbit.position1602(LcdPosition1602.P16), 16)
    basic.pause(200)
    makerbit.showStringOnLcd1602("Its cool", makerbit.position1602(LcdPosition1602.P0), 16)
})
input.onGesture(Gesture.Shake, function () {
    makerbit.clearLcd1602()
    makerbit.showStringOnLcd1602("Stop that!", makerbit.position1602(LcdPosition1602.P0), 16)
})
makerbit.clearLcd1602()
makerbit.showStringOnLcd1602("See i can", makerbit.position1602(LcdPosition1602.P0), 16)
basic.pause(30.)
makerbit.showStringOnLcd1602("Make cool stuff", makerbit.position1602(LcdPosition1602.P16), 16)
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
