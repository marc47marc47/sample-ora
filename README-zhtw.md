# Oracle Database Web 範例使用 Node.js

## 架構
```
前端 (http-server)
     |
    RESTful API
     |
     V
後端 (Node.js)
     |
    oracledb 庫
     |
     V
Oracle 資料庫 11g
```

## 軟體準備

### Node.js

* 下載

  **建議使用 Node.js 20 LITS**
  + [Node.js 下載](https://nodejs.org/en/download/package-manager/current)

* Oracle 資料庫

  **建議使用 Oracle 12c**
  + Oracle 12c + oracledb
  + Oracle 11g + oracledb + Instant Client

* Oracle 11g 專用的 Instant Client

  + **Windows 下載**
    - [Oracle Instant Client for Windows](https://www.oracle.com/tw/database/technologies/instant-client/winx64-64-downloads.html)

  + **MacOS 下載**
    - [Oracle Instant Client for MacOS](https://www.oracle.com/database/technologies/instant-client/macos-arm64-downloads.html)

## 測試資料庫連線

```
project/
│
└── test-conn.js
```

* 使用 `test-conn.js` 測試資料庫連線是否正常
```bash
$ node test-conn.js
Successfully connected to Oracle Database using Instant Client.
EMP 表資料: 
7369,SMITH,CLERK,7902,Wed Dec 17 1980 00:00:00 GMT+0800 (Taipei Standard Time),800,,20
7499,ALLEN,SALESMAN,7698,Fri Feb 20 1981 00:00:00 GMT+0800 (Taipei Standard Time),1600,300,30
7521,WARD,SALESMAN,7698,Sun Feb 22 1981 00:00:00 GMT+0800 (Taipei Standard Time),1250,500,30
7566,JONES,MANAGER,7839,Thu Apr 02 1981 00:00:00 GMT+0800 (Taipei Standard Time),2975,,20
7654,MARTIN,SALESMAN,7698,Mon Sep 28 1981 00:00:00 GMT+0800 (Taipei Standard Time),1250,1400,30
7698,BLAKE,MANAGER,7839,Fri May 01 1981 00:00:00 GMT+0800 (Taipei Standard Time),2850,,30
7782,CLARK,MANAGER,7839,Tue Jun 09 1981 00:00:00 GMT+0800 (Taipei Standard Time),2450,,10
7788,SCOTT,ANALYST,7566,Sun Apr 19 1987 00:00:00 GMT+0800 (Taipei Standard Time),3000,,20
7839,KING,PRESIDENT,,Tue Nov 17 1981 00:00:00 GMT+0800 (Taipei Standard Time),5000,,10
7844,TURNER,SALESMAN,7698,Tue Sep 08 1981 00:00:00 GMT+0800 (Taipei Standard Time),1500,0,30
7876,ADAMS,CLERK,7788,Sat May 23 1987 00:00:00 GMT+0800 (Taipei Standard Time),1100,,20
7900,JAMES,CLERK,7698,Thu Dec 03 1981 00:00:00 GMT+0800 (Taipei Standard Time),950,,30
7902,FORD,ANALYST,7566,Thu Dec 03 1981 00:00:00 GMT+0800 (Taipei Standard Time),3000,,20
7934,MILLER,CLERK,7782,Sat Jan 23 1982 00:00:00 GMT+0800 (Taipei Standard Time),1300,,10
Connection closed.
```

## 執行 Web

```
project/
│
│   (前端)
├── views/
│   └── index.ejs
├── public/
│   ├── styles.css
│   └── jquery.min.js
│
│
│   (後端)
├── app.js
└── package.json
```

### 後端
在背景執行 `app.js`
+ **Windows 執行指令**
``` 
start node app.js
```

+ **MacOS 執行指令**
``` 
nohup node app.js &
```

### 前端
+ **Windows 執行指令**
``` 
start http-start -p 8080
```

+ **MacOS 執行指令**
``` 
nohup http-start -p 8080
```
