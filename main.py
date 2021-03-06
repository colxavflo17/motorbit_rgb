basic.showIcon(IconNames.Happy)
motorbit.rgb().setBrightness(10)
let LED1 = motorbit.rgb().range(0, 1)
let LED2 = motorbit.rgb().range(1, 1)
let LED3 = motorbit.rgb().range(2, 1)
let LED4 = motorbit.rgb().range(3, 1)
basic.forever(function () {
    LED1.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(100)
    LED1.clear()
    LED2.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(100)
    LED2.clear()
    LED3.showColor(neopixel.colors(NeoPixelColors.White))
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(100)
    LED3.clear()
    LED4.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(100)
    LED4.clear()
})
