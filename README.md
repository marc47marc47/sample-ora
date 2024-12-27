# oracle database web samples with nodejs


## framework
```
Frontend (http-server)
     |
    RESTful api
     |
     V
Backend (nodejs)
     |
    oracledb lib
     |
     V
Oracle Database 11g
```



## prepare software
### nodejs

* download

  Recommand nodejs 20 LITS
  + https://nodejs.org/en/download/package-manager/current


* oracle database

  Recommand oracle 12c 
  + oracle 12c + oracledb
  + oracle 11g + oracledb + instantclient
  

* oracle instantclient for oracle 11g


+ windows download
  - https://www.oracle.com/tw/database/technologies/instant-client/winx64-64-downloads.html

+ macos download
  - https://www.oracle.com/database/technologies/instant-client/macos-arm64-downloads.html


## Test database connect
```
project/
│
└── test-conn.js
```

 * use test connect js to test if the db connect is available
``` bash
$ node test-conn.js
Successfully connected to Oracle Database using Instant Client.
EMP Table Data: 7369,SMITH,CLERK,7902,Wed Dec 17 1980 00:00:00 GMT+0800 (Taipei Standard Time),800,,20
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

## Run web 

```
project/
│
│   (Frontend)
├── views/
│   └── index.ejs
├── public/
│   ├── styles.css
│   └── jquery.min.js
│
│
│   (Backend)
├── app.js
└── package.json
```

### Backend
start to run app.js in background
+ Windows run command
``` 
start node app.js
```

+ macos command
``` 
nohup node app.js &
```

### Frontend
+ Windows run command
``` 
start http-start -p 8080
```

+ macos command
``` 
nohup http-start -p 8080
```


