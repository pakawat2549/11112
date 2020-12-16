basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 0 && 0 == pins.digitalReadPin(DigitalPin.P14)) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 250)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1 && 0 == pins.digitalReadPin(DigitalPin.P14)) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0 && 1 == pins.digitalReadPin(DigitalPin.P14)) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    }
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 13) {
        while (maqueen.Ultrasonic(PingUnit.Centimeters) < 13) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
            basic.pause(2000)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 10)
            basic.pause(2000)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 250)
            basic.pause(1000)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
        }
    }
})
