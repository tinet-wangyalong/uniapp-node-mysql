// index.js
Page({
    // 页面初始化
    data: {
        name: "codeMonkey index",
        age: 100
    },
    // 生命周期的监听
    onLoad() {
        console.log('index onLoad')
    },
    // 自定义处理函数
    sayHello() {
        console.log('hello')
    }
})
