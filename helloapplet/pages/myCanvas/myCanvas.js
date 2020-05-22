Page({
  onReady: function() {
    var context = wx.createCanvasContext('myCanvas');

    context.setStrokeStyle("#ff0000");
    context.setLineWidth(2);
    context.rect(0, 0, 300, 300);
    context.stroke();

    for(var i = 0; i <= 30; i ++) {
      var x = 10 * i;
      var y = 10 * i;
      context.moveTo(x + 100, y);
      context.arc(x, y, 100, 0, 2 * Math.PI, true);
    }
    context.stroke()

    context.draw();
  }
})