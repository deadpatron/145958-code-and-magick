'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

//
var CLOUD_X = 100;
var CLOUD_Y = 255;
var GAP = 50;
var FONT_GAP = 50;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
//


var renderCloud = function(ctx, color, startX, startY) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo((CLOUD_WIDTH + startX) / 4, startY + 10);
  ctx.lineTo((CLOUD_WIDTH + startX) / 2, startY);
  ctx.lineTo((CLOUD_WIDTH + startX) / 4 * 3, startY + 10);
  ctx.lineTo((CLOUD_WIDTH + startX) , startY);
  ctx.lineTo((CLOUD_WIDTH + startX), CLOUD_HEIGHT + startY);
  ctx.lineTo((CLOUD_WIDTH + startX) / 4 * 3, CLOUD_HEIGHT + startY + 10);
  ctx.lineTo((CLOUD_WIDTH + startX) / 2, CLOUD_HEIGHT + startY);
  ctx.lineTo((CLOUD_WIDTH + startX) / 4, CLOUD_HEIGHT + startY +10);
  ctx.lineTo(startX, CLOUD_HEIGHT);
  ctx.lineTo(startX, startY);
  ctx.closePath();
  ctx.fill();
};
//
var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};
//
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 'rgba(0, 0, 0, 0.7)', 110, 20);
  renderCloud(ctx, '#fff', 100, 10);

  ctx.fillStyle = '#000000';
  ctx.fillfont = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);

//
  ctx.fillStyle = '#000000';
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i, CLOUD_Y);
    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_HEIGHT) * i, CLOUD_Y + TEXT_WIDTH, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
  }

//

}
