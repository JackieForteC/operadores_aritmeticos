let num1 = 0
let num2 = 0
input.onButtonPressed(Button.A, function () {
    num1 = randint(0, 10)
    num2 = randint(0, 10)
    basic.showNumber(num1)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(100)
    basic.showNumber(num2)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(100)
    basic.showNumber(num1 + num2)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    num1 = randint(0, 10)
    basic.showNumber(num1)
    basic.pause(100)
    basic.showLeds(`
        # . # # #
        . . # . .
        . . # . .
        . . # . .
        . . # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showNumber(num1 * 1.8 + 32)
    basic.pause(100)
    basic.showLeds(`
        # . # # #
        . . # . .
        . . # # #
        . . # . .
        . . # . .
        `)
    basic.pause(100)
    basic.clearScreen()
})
basic.forever(function () {
	
})
