var app = getApp()
Page({
  data: {
    hidden: false,
    curNav: 1,
    curIndex: 0,
    cart: [],
    nameCart: [],
    cartTotal: 0,
    cartSum: 0,
    navList: [
      {
        id: 1,
        name: '健身房',
       
      },
      {
        id: 2,
        name: '羽毛球场'
      },
      {
        id: 3,
        name: '乒乓球馆'
      },
      {
        id: 4,
        name: '台球房'
      }
    ],
    dishesList: [
      [
        {
          name: "1号跑步机",
         
          num: 1,
          id: 1,
          state: '可预约'
        },
        {
          name: "2号跑步机",
         
          num: 1,
          id: 2,
          state: '可预约'
        },
        {
          name: "3号跑步机",
         
          num: 1,
          id: 3,
          state: '可预约'
        },
        {
          name: "4号跑步机",

          num: 1,
          id: 4,
          state: '可预约'
        },
        {
          name: "5号跑步机",

          num: 1,
          id: 5,
          state: '可预约'
        }
      ],
      [
        {
          name: "小炒日本豆腐",
          price: 8,
          num: 1,
          id: 3
        },
        {
          name: "烤鱼",
          price: 12,
          num: 1,
          id: 4
        }
      ],
      [
        {
          name: "大拌菜",
          price: 6,
          num: 1,
          id: 5
        },
        {
          name: "川北凉粉",
          price: 5,
          num: 1,
          id: 6
        }
      ],
      []
    ],
    dishes: []
  },
  loadingChange() {
    setTimeout(() => {
      this.setData({
        hidden: true
      })
    }, 2000)
  },
  selectNav(event) {
    let id = event.target.dataset.id,
      index = parseInt(event.target.dataset.index);
    self = this;
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
  // 选择菜品
  selectDish(event) {
    let dish = event.currentTarget.dataset.dish;
    let dishes = this.data.dishesList;
    let flag = true;
    let cart = this.data.cart;
    var sum = 0;
    let nameCart = [];

    if (cart.length > 0) {
      cart.forEach(function (item, index) {
        if (item == dish) {
          cart.splice(index, 1);
          flag = false;
        }
      })
    }
    if (flag) cart.push(dish);
    cart.forEach((item) => {
      for (let food of dishes) {
        food.forEach((eachFood) => {
          if (item == eachFood.id) {
            sum += eachFood.price;
            nameCart.push(eachFood.name);
          }
        })
      }
    })

    this.setData({
      cartTotal: cart.length,
      cartSum: sum,
      nameCart: nameCart
    })
    this.setStatus(dish)
  },
  setStatus(dishId) {
    let dishes = this.data.dishesList;
    for (let dish of dishes) {
      dish.forEach((item) => {
        if (item.id == dishId) {
          item.status = !item.status || false
        }
      })
    }

    this.setData({
      dishesList: this.data.dishesList
    })
  },
  bindViewTab: function () {
    wx.navigateTo({
      url: '../comment/comment',
    })
  },
  onLoad() {
    this.loadingChange()
  },
  //监听页面渲染
  onReady: function () { },
  //监听页面显示
  onShow: function () {
    this.setData({
      classifySeleted: this.data.navList[0].id
    });
  }


})