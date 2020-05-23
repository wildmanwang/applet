Page({
  data: {
    x: 100,
    y: 50
  },
  tap1: function (e) {
    this.setData({
      x: 50,
      y: 20
    });
    console.log("111");
  }
})