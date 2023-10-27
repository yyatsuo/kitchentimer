input.onButtonPressed(Button.A, function () {
    if (is_count_down == 0) {
        counter += -1
        if (counter < 0) {
            counter = 9
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    is_count_down = 1
    while (counter > 0) {
        counter += -1
        basic.pause(1000)
    }
    music.play(music.stringPlayable("C E G E D F E D ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C E G E D F E D ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C C C C - - - - ", 120), music.PlaybackMode.UntilDone)
    is_count_down = 0
})
input.onButtonPressed(Button.B, function () {
    if (is_count_down == 0) {
        counter += 1
        if (counter >= 10) {
            counter = 0
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (is_count_down == 0) {
        counter = 0
    }
})
let is_count_down = 0
let counter = 0
counter = 0
is_count_down = 0
basic.forever(function () {
    basic.showNumber(counter)
})
