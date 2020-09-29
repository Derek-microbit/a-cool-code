def on_forever():
    makerbit.show_string_on_lcd1602("See i can", makerbit.position1602(LcdPosition1602.P0), 16)
    basic.pause(30.)
    makerbit.show_string_on_lcd1602("Make cool stuff",
        makerbit.position1602(LcdPosition1602.P16),
        16)
    basic.show_leds("""
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        """)
basic.forever(on_forever)
