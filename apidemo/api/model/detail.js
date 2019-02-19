const db = require('../../db');
const selectDetail = (id) => {
    return new Promise((resolve) => {
        const sql = `select * from product where id=${id}`;
        db.query(sql,[],(error,data) => {
            resolve(Array.from(data))
        })
    })
}
module.exports = {
    selectDetail
}