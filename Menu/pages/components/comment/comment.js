var app = getApp();

Page({
  data:{
    name:'无选择'
  },
  loadingChange() {
    setTimeout(() => {
      this.setData({
        hidden: true
      })
    }, 2000)
  },
  onLoad() {
    this.loadingChange();
  },


  getPreData(){
    var pages = getCurrentPages();
    var Page = pages[pages.length - 1];//当前
    var prePage = pages[pages.length - 2];
    var info = prePage.data;

    let nameCart=info.nameCart;

    this.setData({
      name:nameCart
    })
  },
  //监听页面渲染
  onReady: function () { },
  //监听页面显示
  onShow: function () {
    var pages = getCurrentPages();
    

    if (pages.length > 2) {
      var foodStr = '选择了';
      var Page = pages[pages.length - 1];//当前
      var prePage = pages[pages.length - 2];
      var info = prePage.data;

      let nameCart = info.nameCart;
      

      nameCart.forEach((item)=>{
        foodStr+='['+item+']';
      })

      this.setData({
        name: foodStr
      })
    }
  }



})
