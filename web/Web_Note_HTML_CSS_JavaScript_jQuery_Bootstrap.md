# Web 笔记

## 编码规范

[HTML&CSS编码规范](https://codeguide.bootcss.com/)

## HTML

HTML 注释
```
<!-- HTML 注释 -->
```

DOCTYPE 不区分大小写
```
<!dOCtyPe hTMl>
```

网页导入CSS样式和JavaScript文件
```
<link rel="stylesheet" href="/css/bootstrap.min.css">
<script src="/js/bootstrap.min.js"></script>
```

漂移文字
```
<marquee>漂移文字</marquee>
```

图片链接
```
<a href="http://www.mycodes.net" target="_blank">
  <img src="http://www.mycodes.net/wwwimages/n/163logo.gif" width="150" height="100">
</a>
```

网页模板
```
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <link href="/images/favicon.ico" rel="shortcut icon" type="image/x-icon">
    <title>Page title</title>
  </head>
  <body>
    <img src="/images/company-logo.png" alt="Company">
    <h1 class="hello-world">Hello, world!</h1>
  </body>
</html>
```

```
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="UI.index" %>

<%@ Register TagPrefix="Header" TagName="Header" Src="/AscxModular/Header.ascx" %>
<%@ Register TagPrefix="Footer" TagName="Footer" Src="/AscxModular/Footer.ascx" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
  <link href="/images/favicon.ico" rel="shortcut icon" type="image/x-icon">
  <title>首页 - iban 网</title>
  <link rel="stylesheet" href="/css/bootstrap.min.css">
  <link rel="stylesheet" href="/css/index.css">
</head>
<body>
  <form id="form1" runat="server">
    <Header:Header ID="Header" runat="server"></Header:Header>
    <Footer:Footer ID="Footer" runat="server"></Footer:Footer>
```

网页模板（注释版）
```
<!DOCTYPE html>
<!-- 设置语言属性 -->
<html lang="zh-CN">
  <head>
    <!-- 声明字符编码 -->
    <meta charset="UTF-8">
    <!-- 设置 IE 兼容模式 -->
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <!-- 设置缩放控制 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <!-- 设置网页图标 -->
    <link href="/images/favicon.ico" rel="shortcut icon" type="image/x-icon">
    <!-- 设置网页标题 -->
    <title>Page title</title>
  </head>
  <body>
    <img src="/images/company-logo.png" alt="Company">
    <h1 class="hello-world">Hello, world!</h1>
  </body>
</html>
```

<!-- HTML结束 -->

## CSS

CSS 注释
```
/* CSS 注释 */
```

[CSS 压缩](https://www.sojson.com/css.html)

块居中和行居中
```
margin: 0 auto;
text-align：center;
```

textarea自动宽度
```
<textarea id="advise_text" runat="server" placeholder="请输入内容简介" cssclass="form-control input-block col-xs-12" style="width:100%;"></textarea>
```

白色阴影框背景效果·瓦片效果
```
.tile {
  position: relative;
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
```

白色阴影框背景效果·瓦片效果（压缩）
```
.tile{position:relative;background:#ffffff;border-radius:20px;padding:20px;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2);box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2);margin-bottom:30px;-webkit-transition:all 0.3s ease-in-out;-o-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}
```

默认配置 | 链接取消下划线
```
* {
  margin: 0;
  padding: 0;
}
body {
  font: 14px/1.5 Arial, Microsoft Yahei, sans-serif;
  color: #636b6f;
}
img {
  border: 0;
}
a, a:focus, a:visited, a:link, a:hover, a:active {
  text-decoration: none;
}
```

表格垂直居中
```
th, td {
  vertical-align: middle;
}
```

两端对齐
```
text-align: justify;
```

圆角
```
border-radius: 30px;
```

字间距与词间距
```
letter-spacing: 0.5em;
word-spacing: 0.5em;
```

首行缩进
```
text-indent: 2em;
```

鼠标消失效果
```
* {
  cursor: none !important;
}
```

圆角效果（水平/斜线 左上右上右下左下）
```
.div {
  border-radius: 5px 5px 3px 2px / 5px 5px 1px 3px;
}
```

彩色选中
```
::selection {
  color: #fff;
  background-color: #00b38a;
}
::-moz-selection {
  color: #fff;
  background-color: #00b38a;
}
```

黑白效果
```
.black-and-white {
  -webkit-filter:grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  -webkit-filter: grey;
  filter: gray;
}
```

毛玻璃效果
```
background-color: hsla(0, 0%, 100%, .3);
```

图片居中
```
<img class="img-responsive">
```

常用字体设置
```
font-family: "\5FAE\8F6F\96C5\9ED1", YaHei, Arial, Helvetica, sans-serif;
```

[底部固定](https://blog.csdn.net/xianglikai1/article/details/78411615)丨永久与相对两种代码
```
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <meta charset="utf-8" />
    <style>
        body {
            padding-bottom: 50px;
        }

        .footer {
            position: fixed;
            left: 0px;
            bottom: 0px;
            width: 100%;
            height: 50px;
            background-color: #eee;
            z-index: 9999;
        }
    </style>
</head>
<body>
    内容，可以大量复制看效果<br />

    <div class="footer">固定在底部</div>
</body>
</html>
```

```
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <meta charset="utf-8" />
    <style type="text/css">
        * {
            margin: 0px;
            padding: 0px;
        }

        html, body {
            height: 100%;
        }

        .footer {
            margin-top: -50px;
            height: 50px;
            background-color: #eee;
            z-index: 9999;
            clear: both;
        }

        .wrap {
            min-height: 100%;
        }

        .main {
            padding-bottom: 50px;
        }
    </style>
</head>
<body>
    <div class="wrap">
        <div class="main">
            内容，可以大量复制看效果<br />

        </div>
    </div>
    <div class="footer">相对在底部</div>
</body>
</html>
```

404 Page丨[查看效果](http://www.infzm.com/content/20509/0)
```
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Page Not Found</title>
  <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
  <style>
    html, body {
      background-color: #fff;
      color: #636b6f;
      font-family: 'Nunito', sans-serif;
      font-weight: 100;
      height: 100vh;
      margin: 0;
    }
    .full-height {
      height: 100vh;
    }
    .flex-center {
      align-items: center;
      display: flex;
      justify-content: center;
    }
    .position-ref {
      position: relative;
    }
    .content {
      text-align: center;
    }
    .title {
      font-size: 36px;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="flex-center position-ref full-height">
    <div class="content">
      <div class="title">
        Sorry, the page you are looking for could not be found.
      </div>
    </div>
  </div>
</body>
</html>
```

[用CSS解决hover一个div，改变另外2个div的样式](https://blog.csdn.net/Newbie___/article/details/89811754)
```
.carousel-control {
  display:none;
}
.carousel-inner:hover ~ .carousel-control  {
  display:block;
}
.carousel-control:hover {
  display:block;
}
.carousel-control:hover glyphicon ~ .carousel-control {
  display:block;
}
```

<!-- CSS结束 -->

## JavaScript

JavaScript 注释
```
// JavaScript 注释
```

网页可编辑
```
document.body.contentEditable='true';
```

网页跳转
```
window.location.href='index.html';
```

网页刷新
```
window.location.reload();
```

跳转网页的搜索功能
```
<input id="ipt" onkeydown="KeyDown()" class="form-control" type="text" placeholder="2021年还可以用ASP.NET吗？">
<span class="btn btn-success" onclick="search()">搜索</span>
<script>
    function KeyDown() {
        if (event.keyCode == 13) {
            search();
            alert("好消息，好消息！\n本网站与百度达成战略合作协议！");
        }
    }
    function search() {
        var sc = "https://www.baidu.com/s?wd=";
        var it = document.getElementById("ipt").value
        var url = sc + encodeURIComponent(it);
        window.location.assign(url);
    }
</script>
```

弹窗
```
alert('弹窗');
```
```
<button type="button" onclick="alert('Welcome!')">点击这里</button>
```

控制台日志
```
console.log("登录页<br>前端登录测试");
```

禁止滚动
```
<script>
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  var move = function (e) {
    e.preventDefault && e.preventDefault();
    e.returnValue = false;
    e.stopPropagation && e.stopPropagation();
    return false;
  }
  var keyFunc = function (e) {
    if (37 <= e.keyCode && e.keyCode <= 40) {
      return move(e);
    }
  }
  document.body.onkeydown = keyFunc;
</script>
```

禁止复制和选择
```
document.oncontextmenu=new Function('event.returnValue=false;');
document.onselectstart=new Function('event.returnValue=false;');
```

?显示时间效果丨[参考](https://blog.csdn.net/Majker/article/details/89479109)
```
<input class="form-control" id="time" readonly />
<script>
    // 效果
    // 2020年11月24日11:24:01
    // 创建Date对象
    var date = new Date();
    // 调用函数
    timemove();
    // 定义函数
    function timemove() {
        // 定义各时间变量
        var date = new Date();
        var year = date.getFullYear();
        var mth = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        var week = date.getDay();
        // 定义拼接变量,变量调用转换两位数函数
        var time = year + "年" + fn(mth) + "月" + fn(d) + "日 " + fn(h) + ":" + fn(m) + ":" + fn(s);
        // 定义函数，将一位数"1"转为两位数"01"
        function fn(str) {
            str < 10 ? str = "0" + str : str;
            return str;
        }
        // 定义定时器，调用函数，每秒刷新
        setInterval(timemove, 1000);
        // 拼接变量显示在页面
        document.getElementById("time").value = time;
    }
</script>
```

数字判断函数
```
function isnoabcnum(str) {
  var pattern = new RegExp("[a-z0-9]+");
  if(pattern.test(str)){
    return false;
  } else {
    return true;
  }
}
```

有效性检查实例
```
function addStaff() {
  // 获取对应元素的值
  // var id=$("#id").val() // 增加没有id
  var username=$("#username").val().trim()
  var password=$("#password").val().trim() // 修改没有password
  var name=$("#name").val().trim()
  var phone=$("#phone").val().trim()
  var age=$("#age").val().trim()
  var sex=$("#sex").val().trim()
  // var role=$("#role").val() // 增加没有role
  // 输入判断
  if (isEmpty(username)||isEmpty(password)
      ||isEmpty(name)||isEmpty(phone)
      ||isEmpty(age)||isEmpty(sex)) {
    alert("输入不能为空");
    return;
  }
  if (isnoabcnum(username)) {
    alert("请输入小写字母和数字的用户名");
    return;
  }
  if (!(sex == "男" || sex == "女")) {
    alert("请输入真实的性别");
    return;
  }
  if (isNaN(age) || parseInt(age) < 0 || parseInt(age) > 127) {
    alert("请输入真实的年龄");
    return;
  }
  if (isNaN(phone) || phone.length < 11) {
    alert("请输入真实的11位手机号（特殊手机号请联系管理员）");
    return;
  }
}
```

[判空函数](https://blog.csdn.net/qq_36150631/article/details/94553703)
```
function isEmpty(v) {
    switch (typeof v) {
    case 'undefined':
        return true;
    case 'string':
        if (v.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
        break;
    case 'boolean':
        if (!v) return true;
        break;
    case 'number':
        if (0 === v || isNaN(v)) return true;
        break;
    case 'object':
        if (null === v || v.length === 0) return true;
        for (var i in v) {
            return false;
        }
        return true;
    }
    return false;
}
```

```
Copyright &copy; <span id="copyyear"></span>&nbsp;funhuman
<script>document.getElementById('copyyear').innerHTML = new Date().getFullYear();</script>
```
[基于JavaScript的网页头部尾部模板](https://www.cnblogs.com/jtjds/p/5326200.html)
[HTML to JS]转换工具(http://tool.chinaz.com/Tools/Html_Js.aspx)

<!-- js 结束 -->

## jQuery
[按钮变色效果](https://blog.csdn.net/qq_36213352/article/details/81295719)
```
function SupendButtonClick(obj) {
  // 清空其它同类按钮选中颜色
  $('div[id^="SupendButton-"]').css("background-color", "#4cb0f9"); // 按钮原来颜色
  // 点击后变色
  $(obj).css("background-color", "red");
}
```

## Bootstrap

配置 Bootstrap
```
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/font-awesome.css">
<!-- Bootstrap JS -->
<script src="/js/jquery.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
```

面板
```
<div class="panel panel-default">
   <div class="panel-heading">
      <h3 class="panel-title">
         Panel With title
      </h3>
   </div>
   <div class="panel-body">
      Panel content
   </div>
</div>
```

## Others

### 相对路径与绝对路径

[参考](http://www.yinhuafeng.cn/seo/420.html)

例如C盘下有一个文件夹test，文件夹下有文本文件text1和text2。

test：C:/test
text1：C:/test/text1.txt
text2：C:/test/text2.txt

text1中调用text2：
(1) ./text2.txt
(2) text2.txt (省略./)
(3) ../test/text2.txt

即：
- `/` 代表根目录
- `./` 代表文件所在的目录（可省略）
- `../` 代表文件所在的上一级目录
- `../../`  代表文件所在的上两级目录
- `#` **特别的**，在网页中#可以代表本页面

### echarts

[5 分钟上手 ECharts](https://echarts.apache.org/zh/tutorial.html#5%20%E5%88%86%E9%92%9F%E4%B8%8A%E6%89%8B%20ECharts)

引入 ECharts
```
<script src="/js/echarts.min.js"></script>
```

### ajax

```
// 调用ajax判断是否登录成功
$.ajax({
  type: "post",
  url: "insertStaff.st",
  dataType: "text",
  async: true,
  data: {
    "username": username,
    "password": password,
    "name": name,
    "phone": phone,
    "age": age,
    "sex": sex,
  },
  // 回调方法
  success: function(data) {
    if (data=="re") {
      alert("用户名不能重复");
    } else if (data=="ok") {
      if (isEmpty($("#userid").val())) {
        alert("注册成功");
              parent.quit();
        }
    } else {
      alert("注册失败");
    }
  },
  error: function() {
    alert("请求失败！");
  }
});
```
