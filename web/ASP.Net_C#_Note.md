# ASP.Net C# 笔记

## 编码规范

[HTML&CSS编码规范](https://codeguide.bootcss.com/)
[C#编码规范](https://www.cnblogs.com/wulinfeng/archive/2012/08/31/2664720.html)
[C#编码规范2](https://yq.aliyun.com/articles/259043)

## 解决方案版本转换为2010

> 本部分参考：[Visual Studio各版本工程文件之间的转换](https://www.cnblogs.com/jmliao/p/5594179.html)

`*.sln` 前4行修改为以下4行：
```

Microsoft Visual Studio Solution File, Format Version 11.00
# Visual Studio 2010
VisualStudioVersion = 10
```

`*.csproj` 第1行：
```
<Project ToolsVersion="4.0"
```

## 设置默认文档

[ASP.NET之设置默认文档](https://my.oschina.net/taadis/blog/793691)

`Web.config` 文件中：
```
<configuration>
  <system.webServer>
    <defaultDocument>
      <files>
        <clear/>
        <add value="index.html"/>
      </files>
    </defaultDocument>
  </system.webServer>
</configuration>
```

```
<configuration>
  <system.webServer>
    <defaultDocument>
      <files>
        <clear/> <!-- 添加默认文档前先clear避免跟IIS默认文档冲突-->
        <add value="amap.html"/> <!-- 位于根目录下-->
        <add value="2.aspx"/> <!-- 找不到1.html会来找2.aspx-->
        <add value="x/3.aspx"/> <!-- 位于其他文件夹目录下-->
      </files>
    </defaultDocument>
  </system.webServer>
</configuration>
```

## asp.net 对象

ASP.NET中有以下几个对象：

- Response 对象
- Request 对象
- Session 对象
- Cookie 对象
- Application 对象


Response.Write() 将信息写入 http 响应输出流（页面顶部）
Response.Redirect() 页面重定向
Request.Path 返回完整的 url 地址
Request.QueryString["参数名称"] 获取 get 方式传递的参数
Request.From["参数名称"] 获取 post 方式传递的参数
Request["参数名称"] 获取 get/post 方式传递的参数

Session 运行在服务器端，当用户与服务器建立连接时，服务器就会建立一个 Session，并以 SessionID 作为唯一标识，Session 可以存储集合或文本，生命周期一般是使用整个网站期间。

Cookie 运行在客户端，当 cookie 被设置后，用户每次访问网站，该网站都可以读取 cookie 里的内容，cookie一般是一小段文本信息。

## 2-1

模板页

添加新项“Web Form 母版页”（Web 窗体母版页）
添加“包含母版页的 Web 窗体”

DBHelper

连接字符串

静态方法 不需要new，可以直接使用，较为方便

using 作用 在这个期间（条件）使用方法

get

post

public class User
{
    public int id { get; set; }
}

SqlParameter

SqlParameter[] ps =
{
    new SqlParameter("@id", id),
    new SqlParameter("@name", name),
    new SqlParameter("@pwd", pwd),
    new SqlParameter("@type", type)
};

### 分页

select * from (select *,row_number() over (order by MId) as Num from MemberInfo where MIsDelete=0) as t where t.Num between @start and @end;

start = PageSize * (PageIndex - 1) + 1
end = PageSize * PageIndex


[请问后台用asp如何控制div的隐藏与显示？](https://bbs.csdn.net/topics/380145345?list=7440505)
> div runat="server"，后台调用属性visiable
## ASP

页面重定向（页面跳转）
```
Response.Redirect("/system/login.aspx");
```

Session 的读写
```
string uid = Session["uid"].ToString();
Session["uid"] = null;
```

Cookie 的读写
```
// 设置 Cookie
HttpCookie myCookie1 = new HttpCookie("username");
HttpCookie myCookie2 = new HttpCookie("password");
myCookie1.Value = username;
myCookie2.Value = encodePassword;
// 设置 Cookie 的有效时间
DateTime now = DateTime.Now;
myCookie1.Expires = now.AddDays(7);
myCookie2.Expires = now.AddDays(7);
// 将 Cookie 添加到 cookie 集合
Response.Cookies.Add(myCookie1);
Response.Cookies.Add(myCookie2);
if (Request["username"] != "")
{
    username = Request["username"];
    password = Request["password"];
}
```


[关于ASP.NET TextMode="PassWord"时后台向前台的赋值问题](https://blog.csdn.net/weixin_43553153/article/details/103326228)
```
txtPwd.Attributes.Add("value", '******');
```

后端修改前端样式
```
divUser.Attributes.Add("style", "display: ''");
```




---



## 1-1

新建 ASP.NET Web 应用程序(.NET Framework)

## 1-2

ECharts

网站最重要的功能——增删改查
