basic.showIcon(IconNames.Happy)
motorbit.rgb().setBrightness(20)
let LED1 = motorbit.rgb().range(0, 1)
let LED2 = motorbit.rgb().range(1, 1)
let LED3 = motorbit.rgb().range(2, 1)
let LED4 = motorbit.rgb().range(3, 1)
basic.forever(function () {
    LED1.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(500)
    LED1.clear()
    LED2.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(500)
    LED2.clear()
    LED3.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(500)
    LED3.clear()
    LED4.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(500)
    LED4.clear()
})
