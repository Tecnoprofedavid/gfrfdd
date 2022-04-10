input.onButtonPressed(Button.A, function () {
    if (Barra.get(LedSpriteProperty.X) != 0) {
        Barra.change(LedSpriteProperty.X, -1)
        Barra2.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    if (Barra.get(LedSpriteProperty.X) != 3) {
        Barra.change(LedSpriteProperty.X, 1)
        Barra2.change(LedSpriteProperty.X, 1)
    }
})
let Barra2: game.LedSprite = null
let Barra: game.LedSprite = null
basic.clearScreen()
let sprite = game.createSprite(2, 0)
Barra = game.createSprite(2, 4)
Barra2 = game.createSprite(3, 4)
basic.pause(2000)
basic.forever(function () {
    if (sprite.isTouchingEdge()) {
        if (sprite.isTouching(Barra) || sprite.isTouching(Barra2)) {
            sprite.change(LedSpriteProperty.Direction, randint(135, 215))
            game.addScore(1)
            game.addLife(1)
        }
        if (sprite.get(LedSpriteProperty.X) == 4 && sprite.isTouchingEdge()) {
            game.setScore(0)
            game.setLife(3)
        }
        basic.pause(500)
        sprite.change(LedSpriteProperty.Direction, randint(135, 215))
    }
})
