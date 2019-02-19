var express = require('express');
var router = express.Router();
const homeController = require('./controller/home');
const loginController = require('./controller/login');
const categoryController = require('./controller/category');
const productController = require('./controller/product')
const detailController = require('./controller/detail')
const cartController = require('./controller/cart')



router.get('/home/banner', homeController.banner)
router.get('/home/quick_menu', homeController.quick_menu)
router.get('/login', loginController.login)
router.get('/category', categoryController.select_category)
router.get('/product/list',productController.selectProduct)
router.get('/detail',detailController.select_detail)
router.post('/cart/add_cart',  cartController.addCart)
router.post('/cart/reduce_cart',  cartController.reduceCart)
router.post('/cart/active',  cartController.UpdataActive)
router.post('/cart/upAllactive',  cartController.updateAll)
router.get('/cart/list',  cartController.selectCartList)
module.exports = router;

/**
 * MVC全名是Model View Controller，是模型(model)－视图(view)－控制器(controller)的缩写
 * 路由：一个地址对应一个controller  
 * model: 模型，用来操作数据库，也叫数据模型
 * controller：控制器用来控制数据，输出数据（输出到view）
 * view: 显示数据
 */
