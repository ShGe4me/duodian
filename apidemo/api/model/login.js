const db = require('../../db')

/**
 * 增删改查
 */

const loginsql = (iphone) => {
    return new Promise((resolve) => {
        const sql = `select * from user where iphone=${iphone}`
        db.query(sql, [], (error, data) => {
            if (data) {
                resolve( Array.from(data) )
            } else {
                resolve([])
            }
        })
    })
}

module.exports = {
    loginsql
}