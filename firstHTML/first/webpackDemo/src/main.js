// 将另外两个js文件引入
const common = require('./common')
const util = require('./utils')

// 将css文件引入
require('./style.css')

var num = util.add(1, 2)
common.info("hello webpack" + num)