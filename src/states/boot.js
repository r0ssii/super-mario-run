class Boot extends Phaser.State {
    constructor() {
        super()
    }

    create() {
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;

        if (!this.game.device.desktop) {
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.minWidth = 120;
            this.game.scale.minHeight = 160;
            this.game.scale.maxWidth = 432;
            this.game.scale.maxHeight = 768;
            this.game.scale.forceOrientation(true);
        } else {
            this.game.scale.minWidth = this.game.scale.maxWidth = 432;
            this.game.scale.minHeight = this.game.scale.maxHeight = 768;
        }
    }

}

export default Boot