# Microsoft 365 开发人员计划

Microsoft 365 Developer Program

## 简介

## 相关链接

- [仪表板 - Microsoft 365 开发人员中心](https://developer.microsoft.com/en-us/microsoft-365/profile) 用于查看订阅情况
- [Microsoft 365 admin center](https://portal.office.com/AdminPortal/Home#/homepage) 用于分配和下载 Microsoft 365

## Microsoft 365 E5自动订阅教程

> 参考：<https://juejin.cn/post/7205928315588231226>

E5订阅有效期是90天，可自动进行订阅，但是要被官方判断账号用于开发，可以通过调用API的方式触发续订，正常到期前20-30前天就会获得续订邮件。

这里推荐两种自动续订方式，当然，也可以真的去做开发，这才是开放E5订阅的初衷。

### 通过Github Actions脚本调用API（主用）

#### 生成PAT密钥
目的是获取一个具有workflow权限的PAT密钥用于同步代码。PAT是Github的个人访问令牌。

1.登录github，点击头像，点击Settings进入设置页面。

2.点击页面左下方的Developer settings，然后选择 Personal access tokens（Tokens（classic）），点击 Generate new token（classic） 新建。

3.做出以下配置：

Note：KeepAliveE5 （token的备注名称）

Expiration：No expiration （设置期限为无限到期）

Select scopes：勾选workflow

4.点击最下方的Generate new token按钮。

5.页面会跳转到创建成功页面，点击图中的复制图标，复制并保存生成的 PAT 密钥备用。

#### 导入KeepAliveE5代码到自己的储存库
1.github页面右上角“+”号，点击Import repository。

2.填写表单：

Your old repository's clone URL：github.com/vcheckzen/K…

Repository Name：KeepAliveE5

一定要选择Private，让存储库成为私人库。

3.点击Begin import，开始导入。

#### 开启Action功能
1.进入新创建的仓库（用户名/KeepAliveE5）

2.点击Settings，点击左侧的Code and automation下的Actions--> General

3.Actions permissions勾选第一个Allow all actions and reusable workflws，并save。

注：部分用户账号由于之前跑其它违规项目被封禁 Action 功能的，自行注册新账号。

#### 新建Secrets
1.点击settings，点击左侧Security下的Secrets and variables-->Actions

2.点击右上角的New repository secret。

3.然后按照要求填入下方表格对应的三个密钥（添加三次，一次一个）。PAT就是前边生成的token，USER就是E5邮箱，PASSWD就是E5邮箱的密码。

根据仓库作者的说明：（记得E5管理员禁用安全默认设置portal.azure.com属性-->安全默认值）

Name   |Value
-------|-----
PAT	   | Github personal access token with workflow permission
USER   | E5 admin emails line separated, no leading and trailing spaces
PASSWD | E5 admin passwords line separated, no leading and trailing spaces

#### 启动Action，Register APP工作流
1.点击Actions页面（跟Settings一个级别的那个）

2.点击Register APP，手动触发它完成注册流程，点击右侧 Run workflow，分支就是 master，点击 Run workflow 。等待一会儿，如果是绿色，没有报错，表示执行成功。也可以点击Register APP查看日志，Register apps一项下可以看到注册成功。

#### 启动 Action ，Invoke API工作流
1.进入 Action 点击 Invoke API，点击右侧 Run workflow，分支就是 master，点击 Run workflow 运行调用流程。（有时候需要多执行几次才成功）

2.成功之后就会自动调用API续订E5。

### 通过调用outlook api续订（备用）

<details>
<summary>展开查看</summary>
1.打开Microsoft Azure

2.点击新注册;

3.输入名称，(如：E5xuqi)，点击注册；

4.复制应用程序ID、对象ID、目录（租户）ID出来，后面要用；

5.左侧栏点击证书和密码，点击新客户端密码；

6.说明输入E5，截止期限选730days（2年，过期后再新建）,点击添加；

7.复制这个密码的值出来，后面要用；

8.左侧栏点击API权限，点击添加权限，点击Microsoft Graph，点击应用程序权限，在搜索框里输入mail；

9.点开mail，勾选前四个选项（除了mail.send），点击添加权限；

10.点击代表XXX授予管理员同意,然后点击是（只有有权限的管理员账号可以，如果前边使用的是普通用户，请登录管理员账户再确定）；

11.打开E5续订(这是浅忆大佬贡献的服务器和续订程序，表示感谢)

12.点击上方登陆，点击猫图标；

13.登陆github账号，点击绿色授权按钮，授权成功后，点击返回个人中心，点击不再弹出，点击确定；

14.点击获取回调地址，复制备用。

15.回到 Microsoft Azure

16.左侧栏点击应用注册，点击你的应用程序名；

17.点击添加重定向URL；

18.点击添加平台，右侧点击WEB，第一个输入框，粘贴刚获取的回调地址，点击配置；

19.打开E5续订 点击个人设置；

20.点击新建应用，输入名称，点击确定；

21.点击右侧配置，分别填上刚复制出来的应用程序ID、值、目录(租户)ID(第一个对应应用程序ID、第二个对应值、第三个对应目录ID），点击下一步；

22.设置调用时间（不用改也行）点击下一步；

23.子账号授权，（最好是新建不用的子账号）；

22.勾选代表组织同意，点击接受。
</details>
