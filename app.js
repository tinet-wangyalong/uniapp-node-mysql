// app.js
App({
    // 1、绑定生命周期回调函数

    // 2、注册全局数据

    // 3、注册全局方法

    // 4、错误监听


    // 生命周期初始化完成
    onLaunch() {
        console.log('初始化完成')
    },
    // 注册全局数据
    globalDaata: {
        name: 'codeMonkey',
        age: 18
    },
    // 注册全局方法
    sayHello() {
        console.log('sayHello')
    }
})
