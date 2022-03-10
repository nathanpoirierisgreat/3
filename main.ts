input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 3; index++) {
            music.playTone(330, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Half))
        }
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Double))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(0, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Double))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(220, music.beat(BeatFraction.Whole))
        music.playTone(0, music.beat(BeatFraction.Quarter))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Double))
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 37; index++) {
        basic.showLeds(`
            . . . . .
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . . # . .
            . # . # .
            `)
    }
    basic.clearScreen()
})
basic.forever(function () {
	
})
