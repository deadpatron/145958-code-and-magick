'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 255;
var GAP = 50;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - GAP - GAP - BAR_WIDTH;
var randomBlue = 'rgba(0, 0, 255, (Math.round(Math.random() * 10))/10)';
var POINT_GAP = 10;

var renderCloud = function (ctx, color, startX, startY) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo((CLOUD_WIDTH + startX) / 4, startY + 10);
  ctx.lineTo((CLOUD_WIDTH + startX) / 2, startY);
  ctx.lineTo((CLOUD_WIDTH + startX) / 4 * 3, startY + 10);
  ctx.lineTo((CLOUD_WIDTH + startX), startY);
  ctx.lineTo((CLOUD_WIDTH + startX), CLOUD_HEIGHT + startY);
  ctx.lineTo((CLOUD_WIDTH + startX) / 4 * 3, CLOUD_HEIGHT + startY + 10);
  ctx.lineTo((CLOUD_WIDTH + startX) / 2, CLOUD_HEIGHT + startY);
  ctx.lineTo((CLOUD_WIDTH + startX) / 4, CLOUD_HEIGHT + startY + 10);
  ctx.lineTo(startX, CLOUD_HEIGHT);
  ctx.lineTo(startX, startY);
  ctx.closePath();
  ctx.fill();
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 'rgba(0, 0, 0, 0.7)', 110, 20);
  renderCloud(ctx, '#fff', 100, 10);

  ctx.fillStyle = '#000000';
  ctx.fillfont = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y);
    ctx.fillStyle = randomBlue;
    if (names[i] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y - BAR_WIDTH, BAR_WIDTH, ((-barHeight) * times[i]) / maxTime);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, ((-barHeight * times[i]) / maxTime) + POINT_GAP);
  }
};
