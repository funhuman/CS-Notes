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

网页图标
```
<link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
```

网页导入CSS样式
```
<link href="/css/bootstrap.min.css" rel="stylesheet" />
```

漂移文字
```
<marquee>漂移文字</marquee>
```

图片链接
```
<a href="http://www.mycodes.net";; target="_blank">
  <img src="http://www.mycodes.net/wwwimages/n/163logo.gif"; width="150" height="100">
</a>
```

## CSS

CSS 注释
```
/* CSS 注释 */
```

[CSS 压缩](https://www.sojson.com/css.html)

常用字体设置
```
font-family: "\5FAE\8F6F\96C5\9ED1", YaHei, Arial, Helvetica, sans-serif;
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

字间距与词间距
```
letter-spacing: 0.5em;
word-spacing: 0.5em;
```

首行缩进
```
text-indent: 2em;
```

鼠标消失
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
background-color: hsla(0,0%,100%,.3);
```

[底部固定](https://blog.csdn.net/xianglikai1/article/details/78411615)
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

## JavaScript

JavaScript 注释
```
// JavaScript 注释
```

网页可编辑
```
document.body.contentEditable='true';
```

跳转网页的搜索功能
```
<input id="ipt" onkeydown="KeyDown()" class="form-control" type="text" placeholder="2021年还可以用ASP.NET吗？">
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
alert('弹窗')
```
```
<button type="button" onclick="alert('Welcome!')">点击这里</button>
```

禁止复制和/或选择
```
document.oncontextmenu=new Function('event.returnValue=false;');
document.onselectstart=new Function('event.returnValue=false;');
```

[Js获取当前日期时间](https://blog.csdn.net/Majker/article/details/89479109)
```
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
