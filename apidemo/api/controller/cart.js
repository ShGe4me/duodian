const cart = require('../model/cart')
const product = require('../model/product')

const addCart = async (req, res, next) => {
    const {
        product_id
    } = req.body;
    const item = await cart.selectItem(1, product_id);
    const {count} = await product.selectItem(product_id);
    if (count >= 1) {
        if (item) {
        const updateItem = await cart.updateItem(product_id, {type:'num',num:item.num + 1});
        const updateProduct = await product.updateProduct({
            count: count-1
        }, product_id);
        res.json({
            ...item,
            num: item.num + 1
        })
        } else {
        const insterItem = await cart.insterItem(1, product_id, 1);
        const updateProduct = await product.updateProduct({
            count: count-1
        }, product_id);
        res.json(insterItem)
        }
    } else {
        res.status(403).json({
            massage: '库存不足'
        })
    }
}

const UpdataActive = async (req, res, next) => {
    const {
        product_id,
        active
    } = req.body;
    const item = await cart.selectItem(1, product_id);
        const updateItem = await cart.updateItem(product_id, {type:'active',active:active});
        res.json({
            ...item
        })
}

const reduceCart = async (req, res) => {
    const {
        product_id
    } = req.body;
    
    const item = await cart.selectItem(1, product_id);
    const {count} = await product.selectItem(product_id);
    
    if (item.num - 1 == 0) {
        await cart.removeItem(product_id);
    } else {
        await cart.updateItem(product_id,{type:'num',num:item.num - 1});
    }
    const updateProduct = await product.updateProduct({
        count: count + 1
    }, product_id);
    res.json({
        ...item,
        num: item.num - 1
    })
}

const selectCartList = async (req, res, next) => {
 
    const list = await cart.selectCarts(1);
    const products = [];
    list.forEach(item => {
        products.push(product.selectItem(item.product_id))
    });
    Promise.all(products).then((...rest) => {
        let price = 0;
        const product_list = rest[0].map((item, index) => {
        if(list[index].active*1){
            price += item.price * list[index].num
        }
            return {
                ...item,
                num: list[index].num,
                active: list[index].active,
            }
        });
        res.json({
            list: product_list,
            price: price
        })
    })
}

const updateAll =  async (req, res, next) => {
    const {
        active
    } = req.body;

    const updateItem = await cart.updateAll(active);
    res.json({
        code:1
    })
}

module.exports = {
    addCart,
    reduceCart,
    selectCartList,
    UpdataActive,
    updateAll
} 