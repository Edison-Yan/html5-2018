// pages/movie/movie.js
const date = new Date()
const years = ['今', '明', '后']
const months = []
const days = []

var pickerViewT = 0;
var show = false;
var moveY = 200;

for (let i = 0; i <= 23; i++) {
  months.push(i)
}


for (let i = 0; i <= 59; i++) {
  days.push(i)
}

Page({
  data: {
    currentid: null,
    select: false,
    id: '',

    avatarUrl: null,
    imgUrl: "/images/小图片.png",

    years: years,
    months: months,
    days: days,
    //默认的顶部日期
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    //滑动框中放入的是第几个值
    value: [date.getFullYear(), date.getMonth(), date.getDate() - 1],

  },
  select: function (e) {
    var id = e.currentTarget.dataset.id;
    if (id == this.data.id) {
      return;


    } else {
      this.setData({
        select: !this.data.select.id,
        currentid: id

      })
    }
  }, bindViewTap: function () {
    var that = this;
    wx.chooseImage({
      // 设置最多可以选择的图片张数，默认9,如果我们设置了多张,那么接收时//就不在是单个变量了,
      count: 1,
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // 获取成功,将获取到的地址赋值给临时变量
        var tempFilePaths = res.tempFilePaths;
        that.setData({ imgUrl: res.tempFilePaths })
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  }, bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  },
  translate: function (e) {
    if (pickerViewT == 0) {
      moveY = 0;
      show = false;
      pickerViewT = 1;
    } else {
      moveY = 200;
      show = true;
      pickerViewT = 0;
    }
    // this.animation.translate(arr[0], arr[1]).step();
    animationEvents(this, moveY, show);

  },
  //隐藏弹窗浮层
  hiddenFloatView(e) {
    // console.log(e);
    moveY = 200;
    show = true;
    pickerViewT = 0;
    animationEvents(this, moveY, show);

  },

})

function animationEvents(that, moveY, show) {
  // console.log("moveY:" + moveY + "\nshow:" + show);
  that.animation = wx.createAnimation({
    transformOrigin: "50% 50%",
    duration: 400,
    timingFunction: "ease",
    delay: 0
  }
  )
  that.animation.translateY(moveY + 'vh').step()

  that.setData({
    animation: that.animation.export(),
    show: show
  })

}
