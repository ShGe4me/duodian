const detail = require('../model/detail');
const select_detail = async (req,res,next) => {
    const {
        id,
        callback
    } = req.query;
    try {
        const data = await detail.selectDetail(id);
        console.log('data',data);
        if(callback){
            res.send(callback+'('+JSON.stringify(data)+')')
        }else{
            res.json(data)
        }
    }catch(e){
        res.code(402).json({
            name:'',
            message:'请求失败'
        })
    }
}
module.exports = {
    select_detail
}