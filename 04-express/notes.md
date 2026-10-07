# Express

## Learned

Router：
Method
URL
Controller
Middleware

Controller:
req
res
next

Service:
业务规则

Repository：
数据访问
查数据库
写数据库
更新数据库
删除数据库

## Practice

const getContactById = async(req, res, next) => {
  try{const id = Number(req.params.id);

  const contact =
    await contactService.getContactById(id);

  if (!contact) {
    const err = new Error('Contact not found');
    err.status = 404;
    return next(err);
  }

  res.status(200).json(contact)}catch(err){next(err)}
};

## Important Concepts

- Router
- Middleware
- Error handling

## Still Unclear

PATCH /contacts/123
Authorization: Bearer user-token
Content-Type: application/json

{
  "phone": "13800000000"
}
请求首先进入 Router，匹配到 PATCH /contacts/:id。然后依次经过认证 Middleware 和参数校验 Middleware，确认 Token 有效、id 和 body 格式合法。之后进入 Controller，Controller 从 req.params 和 req.body 读取 id 和 phone，并调用 Service。Service 执行业务规则，再调用 Repository 更新对应联系人的数据。Repository 完成数据修改后把结果返回给 Service，再返回给 Controller。最后 Controller 通过 res.status(200).json(...) 返回更新后的联系人。如果中途发生错误，则通过 next(err) 进入统一 Error Middleware。

req.params 用来获取路径参数，例如 /contacts/:id 中的 id；req.query 用来获取 URL 查询参数，例如 /contacts?name=Amy；req.body 用来获取请求体，常用于 POST、PATCH 等提交数据的请求。




const getContactById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    const contact =
      await contactService.getContactById(id);

    if (!contact) {
      const err = new Error('Contact not found');
      err.status = 404;
      return next(err);
    }

    res.status(200).json(contact);
  } catch (err) {
    next(err);
  }
};
contact 不存在
↓
主动创建 Error
↓
err.status = 404
↓
return next(err)
↓
进入 Error Middleware
↓
返回 404

Repository 抛出 Database connection failed
↓
Service Promise reject
↓
Controller 的 await 抛异常
↓
catch(err)
↓
next(err)
↓
Error Middleware
↓
因为没有 err.status
↓
默认 500
