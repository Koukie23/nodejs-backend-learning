/* 
Method: PATCH
URL: /contacts/1001?source=admin
Body:
{
    "email":"new@example.com"
}

Method:PATCH

URL:/contacts/1001

Headers:
Content-Type:application/json
Authorization: Bearer abc123

Body:
{
    "name":"Alice Chen"
}

| Status                      | 含义       | 常见场景        |
| --------------------------- | -------- | ----------- |
| `200 OK`                    | 成功       | 查询 / 更新成功   |
| `201 Created`               | 创建成功     | POST 创建资源   |
| `204 No Content`            | 成功但无返回内容 | 删除成功        |
| `400 Bad Request`           | 请求有问题    | 参数错误        |
| `401 Unauthorized`          | 未认证      | Token 缺失/无效 |
| `403 Forbidden`             | 无权限      | 普通用户访问管理员接口 |
| `404 Not Found`             | 资源不存在    | 用户/联系人不存在   |
| `500 Internal Server Error` | 服务端错误    | 数据库/代码异常    |


Status Code:403

Body:
{
    "message":"403 Forbidden"
}


Method:GET

URL:/contacts?page=2&limit=10&tag=VIP&sort=name

Headers:
Authorization:Bearer abc123

Body:

成功 Status Code:200

Response Header:
Set-Cookie:sessionId = xyz789

Request Header:
Cookie:sessionId = xyz789

1.
Method:POST
URL:/contacts
Headers:
Content-Type:application/json
Authorization:Bearer abc123
Body:
{
    "name":"Alice",
    "email":"alice@example.com"
}
成功 Status Code:201 created
可能失败 Status Code:400,401,403,500
2.
Method:GET
URL:/contacts?page=3&limit=20&tag=VIP&sort=name&order=asc
Headers:

Authorization:Bearer abc123
Body:null
成功 Status Code:200
可能失败 Status Code:500,401,403,400
3.
Method:PATCH
URL:/contacts/1001?source=admin
Headers:
Content-Type:application/json
Authorization:Bearer admin-token
Body:
{
    "phone":"13800000000"
}
成功 Status Code:200
可能失败 Status Code:404,400,401,403,500
*/