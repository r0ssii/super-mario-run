import Boot from './states/boot'

const game = new Phaser.Game(120, 160, Phaser.AUTO, 'super-mario-run', null, true)

game.state.add('boot', new Boot())
game.state.start('boot')

