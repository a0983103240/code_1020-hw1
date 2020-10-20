let i = 0
let j = 0
let index = 0
basic.forever(function () {
    basic.pause(100)
    basic.clearScreen()
    i = 4
    j = 0
    index = 0
    while (i >= -4) {
        for (let j = 0; j <= index; j++) {
            led.plot(i + j, j)
        }
        index += 1
        i += -1
        basic.pause(100)
    }
})
