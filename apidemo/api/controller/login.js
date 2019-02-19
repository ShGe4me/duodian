const loginModel = require('../model/login')
const login = async (req, res, next) => {
    const {
        iphone,
        callback
    } = req.query;
    try {
        const data = await loginModel.loginsql(iphone)
        res.cookie('token',data)
        if (callback) {
            res.send(callback + '(' + JSON.stringify(data) + ')')
        } else {
            res.json({
                code: 1,
                data: {
                    ...data
                }
            })
        }
    } catch (e) {
        res.status(402).json({
            'name': '',
            'message': '请求失败'
        })
    }
}
module.exports = {
    login
}