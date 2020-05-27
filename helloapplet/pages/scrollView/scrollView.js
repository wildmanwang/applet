var viewList = ["view1", "view2", "view3", "view4", 'view5', "view6"]
Page({
  data: {
    toView: "view1",
    scrollTop: 0
  },
  scrollPage: function(e) {
    console.log("toView:" + this.data.toView)
    for (var i=0; i<viewList.length; i++) {
      if (viewList[i] === this.data.toView) {
        i = i + 1
        if (i === 6) {
          i = 0
        }
        this.setData({
          toView: viewList[i]
        })
        break
      }
    }
  },
  scrollLittle: function(e) {
    console.log("scroll little.")
    this.setData({
      scrollTop: this.data.scrollTop + 20
    })
  }
})