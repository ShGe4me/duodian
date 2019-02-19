const mysql = require('mysql');
const connect = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  database: 'test'
})

connect.connect((error) => {
  if (error) {
    console.log('链接失败')
  } else {
    console.log('链接成功 ')
  }
})

module.exports = connect