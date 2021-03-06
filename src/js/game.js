(function() {
  'use strict';

  function Game() {
    this.player = null;
  }

  Game.prototype = {

    create: function () {
      var x = this.game.width
        , y = this.game.height;

      this.player = this.add.sprite(x, y, 'player');
      this.player.anchor.setTo(0.5, 0.5);
      this.input.onDown.add(this.onInputDown, this);
    },

    update: function () {
      var x, y, cx, cy, dx, dy, angle, scale;

      x = this.input.position.x;
      y = this.input.position.y;
      cx = this.world.centerX;
      cy = this.world.centerY;

      angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI);
      this.player.angle = angle;

      dx = x - cx;
      dy = y - cy;
      scale = Math.sqrt(dx * dx + dy * dy) / 100;

      this.player.scale.x = 0.6+scale * 0.3;
      this.player.scale.y = 0.6+scale * 0.3;

      //////////////////////////////
      this.player.x = x;
      this.player.y = y;
    },

    onInputDown: function () {
      this.game.state.start('menu');
    }

  };

  window['phaser-game'] = window['phaser-game'] || {};
  window['phaser-game'].Game = Game;

}());
