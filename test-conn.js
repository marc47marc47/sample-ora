const oracledb = require('oracledb');

// 設定 Instant Client 的路徑, 下載解壓縮
// oracle 11g以前的版本一定要用到instantclient, 12c以後版本就不用了
// https://www.oracle.com/tw/database/technologies/instant-client/winx64-64-downloads.html
oracledb.initOracleClient({ libDir: '/Users/marc47/nodejs/ora-connect/instantclient-mac64' }); // 修改為你的路徑

async function fetchEmpData() {
  let connection;

  try {
    // 建立與 Oracle 資料庫的連線
    connection = await oracledb.getConnection({
      user: 'scott',          // 使用者名稱
      password: 'tiger',      // 密碼
      connectString: '192.168.131.66:1521/db11g' // 連線字串
    });

    console.log('Successfully connected to Oracle Database using Instant Client.');

    // 撈取 emp 資料表資料
    const result = await connection.execute(`SELECT * FROM emp`);
    //const result = await connection.execute(`select object_type,object_name from dba_objects where object_name like 'SYS_%' order by object_type, object_name`);

    console.log('EMP Table Data:', result.rows.join('\n'));

  } catch (err) {
    console.error('Error occurred:', err);
  } finally {
    if (connection) {
      try {
        // 關閉連線
        await connection.close();
        console.log('Connection closed.');
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
}

// 執行撈取資料的函數
fetchEmpData();
