# Simple example for using node-api-router

Simple project for demonstrating usage node-api-router module

## How to use

```bash
$ npm install
$ npm run start
```

After start available to use:
```bash
GET http://localhost:3001/api/v1/users
```
```bash
GET http://localhost:3001/api/v1/users/getAllUsers
```
```bash
GET http://localhost:3001/api/v1/users/1
```
```bash
POST http://localhost:3001/api/v1/users --data '{
                                                    "id":5,
                                                    "login": "user5",
                                                    "firstName": "Firstnam5",
                                                    "lastName": "Lastnam5"
                                                }'
```
```bash                                      
PUT http://localhost:3001/api/v1/users/1 --data '{
                                                    "login": "user1",
                                                    "firstName": "__Firstnam1__",
                                                    "lastName": "__Lastnam1__"
                                                 }'
```
```bash
DELERE http://localhost:3001/api/v1/users/1
```
All requests need basic authorization. <br />
Add header
```bash
-H 'authorization:YWRtaW46cGFzcw=='
```
and
```bash
-H 'Content-Type:application/json'
```