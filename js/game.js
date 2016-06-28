const GRID_VERTICAL = 8;
const GRID_HORIZONTAL = 8;

function Game(win) {
  this.game = {
    instance: this,
    canvas: null,
    stage: null,
    ctx: null,
    objects: []
  };

  win.game = this.game;
}

Game.prototype.createBgGrid = function (numX, numY) {
  var grid = new createjs.Container();
  grid.snapToPixel = true;

  var spaceX = 500/numX;
  var spaceY = 250/numY;

  var verticalLine = new createjs.Graphics();
  verticalLine.beginFill(createjs.Graphics.getRGB(12, 239, 0, 0.5));
  verticalLine.drawRect(0, 0, spaceX * 0.03, spaceY * (numY + 2));

  var vs;

  for ( var c = -1; c < numX+1; c++) {
    vs = new createjs.Shape(verticalLine);
    vs.snapToPixel = true;
    vs.x = c * spaceX;
    vs.y = -spaceY;
    grid.addChild(vs);
  }

  var horizontalLine = new createjs.Graphics();
  horizontalLine.beginFill(createjs.Graphics.getRGB(12, 239, 0, 0.5));
  horizontalLine.drawRect(0, 0, spaceX * (numX + 1), spaceY * 0.03);

  var hs;

  for ( var c = -1; c < numX+1; c++) {
    hs = new createjs.Shape(horizontalLine);
    hs.snapToPixel = true;
    hs.x = 0;
    hs.y = c * spaceY;
    grid.addChild(hs);
  }

  return grid;
};

Game.prototype.init = function (){
  var canvas = document.createElement('canvas');
  canvas.style = "background-color: #000";
  canvas.width = 500;
  canvas.height = 250;
  document.body.appendChild(canvas);
  this.game.canvas = canvas;
  this.game.ctx = canvas.getContext('2d');

  var stage = new createjs.Stage(canvas);
  var background = this.createBgGrid(GRID_HORIZONTAL, GRID_VERTICAL);
  stage.addChild(background);

  stage.update();
  this.game.stage = stage;
};

(function (window) {
  var game = new Game(window);
  game.init();
})(window);
