// 定义方法
const myAdd = (a, b) => a + b

var mySub = (a, b) => a - b

var f2 = function(a,b){
    return a+b
}



// 设置哪些方法可以被调到
module.exports = {
    myAdd:myAdd, // 完全写法
    mySub, // 简写
    f2
}