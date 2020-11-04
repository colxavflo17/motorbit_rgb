function led2 () {
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
}
function led22 () {
    LED1.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(PAUSE)
    LED1.clear()
    LED2.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(PAUSE)
    LED2.clear()
    LED3.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(PAUSE)
    LED3.clear()
    LED4.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(PAUSE)
    LED4.clear()
}
function servo () {
    motorbit.Servospeed(motorbit.Servos.S1, 0, 180, 10)
    basic.pause(5000)
}
let LED4: neopixel.Strip = null
let LED3: neopixel.Strip = null
let LED2: neopixel.Strip = null
let LED1: neopixel.Strip = null
let PAUSE = 0
PAUSE = 100
basic.showIcon(IconNames.Happy)
motorbit.rgb().setBrightness(10)
LED1 = motorbit.rgb().range(0, 1)
LED2 = motorbit.rgb().range(1, 1)
LED3 = motorbit.rgb().range(2, 1)
LED4 = motorbit.rgb().range(3, 1)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        led2()
    }
    servo()
    basic.pause(1000)
    led22()
})
