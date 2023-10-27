def on_button_pressed_a():
    global counter
    if True:
        counter += -1
        if counter < 0:
            counter = 9
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global is_count_down, counter
    is_count_down = 1
    while counter > 0:
        counter += -1
        basic.pause(1000)
    music.play(music.string_playable("C E G E D F E D ", 120),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("C E G E D F E D ", 120),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("C C C C - - - - ", 120),
        music.PlaybackMode.UNTIL_DONE)
    is_count_down = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global counter
    counter += 1
    if counter >= 10:
        counter = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

is_count_down = 0
counter = 0
counter = 0
is_count_down = 0

def on_forever():
    basic.show_number(counter)
basic.forever(on_forever)
