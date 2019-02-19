
/**
 * 验证用户是否登录
 * @param {} req 
 * @param {*} res 
 * @param {*} next 
 */
const verifyToken = (req, res, next) => {
  console.log(req.cookies)
  const token = req.cookies.token;

  if (token) {
    req.userInfo = token  // 讲用户数据挂载到req上，其他方法中就可以获取了
    next()  // 继续向下执行
  } else {
    // 如果验证失败返回错误状态
    res.status(401).json({
      msg: '用户未登录'
    })
  }
}

module.exports = verifyToken