let Channel = 0
input.onPinPressed(TouchPin.P1, function () {
    Channel = 0
    basic.clearScreen()
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        if (Channel <= 255) {
            led.toggle(2, 2)
            radio.setGroup(Channel)
            Channel += 1
        } else {
            Channel = 0
        }
        radio.sendNumber(69)
        radio.sendString("intruder")
    }
})
