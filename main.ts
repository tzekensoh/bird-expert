input.onButtonPressed(Button.A, function () {
    if (!(FeathersKnown)) {
        FeathersKnown = true
        HasFeathers = true
        basic.showString("Can fly?")
    } else if (HasFeathers) {
        basic.showString("Hawk")
    } else {
        basic.showString("Dolphin")
    }
})
input.onButtonPressed(Button.B, function () {
    if (!(FeathersKnown)) {
        FeathersKnown = true
        HasFeathers = false
        basic.showString("Has fins?")
    } else if (HasFeathers) {
        basic.showString("Penguin")
    } else {
        basic.showString("Bear")
    }
})
let HasFeathers = false
let FeathersKnown = false
let CanFly = false
let HasFins = false
basic.showString("Hello!")
basic.showString("Has feathers?")
FeathersKnown = false
basic.forever(function () {
	
})
