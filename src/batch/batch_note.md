# Batch Note

> 批处理笔记

## 什么是批处理？

> 批处理（英语：batch）是对命令进行批量的处理的脚本语言。通常应用于DOS和Windows系统中，扩展名为bat。[^batch]

[^batch]: [百度百科 - 批处理](https://baike.baidu.com/item/批处理)

## 输出、暂停与注释
```
:: print hello
echo hello
pause
```

## 输出到文件
```
:: 覆盖输出
echo abc >info.txt
:: 追加输出
echo abc >>info.txt
```

## 调用
```
:: 顺序调用，在当前程序中调用
call a.bat
:: 并发调用，在新程序中调用
start b.bat
```

## 列出文件

输出当前目录下所有文件的文件名到文本文件

```
dir /b >list.txt
```

列出当前目录下文件夹里的所有文件信息

```
dir /s
```

输出当前目录下所有文件的文件名（PowerShell）

```
dir -Name
```

## 时间

> 注意：时间依赖计算机时间格式等设置，建议测试后使用。

输出当前时间

```
@echo off
set "t=%time: =0%"
set "dates=%date:~0,4%%date:~5,2%%date:~8,2%"
set "times=%date:~0,4%%date:~5,2%%date:~8,2%_%time:~,2%%time:~3,2%%time:~6,2%"
echo %dates%
echo %times%
pause
```

正确的例子：

```
20240405
20240405_131246
```

## 关机
```
:: 300秒后关机
shutdown /s /t 300
:: 取消关机
shutdown /a
```

## 拖入文件
```
:: 显示拖入文件的文件名
"%~nx1"
:: 显示拖入文件的路径和文件名
"%~dp1%~nx1"
```

## 选择
```
choice /c yn /t 3 /D n
if errorlevel 2 goto n
if errorlevel 1 goto y
```

## 显示环境变量
```
@echo off
echo homedrive %homedrive%
echo username %username%
echo appdata %appdata%
pause
```

## 设置环境变量

设置当前环境变量

```
set test "text"
```

设置用户环境变量

```
setx test "text"
setx path "%path%;D:\text"
```

设置系统环境变量（管理员权限）

```
setx test "text" /m
```

更多参考：[cmd 设置环境cmd环境变量命令set 设置永久环境变量命令setx](https://blog.csdn.net/qq_21808961/article/details/86749758)

## 标题
```
title Test
```

## echo换行
```
echo.
```

## 延时

(不适用bat文件)
```
timeout /t 3
```

## 命令行中换行

```
python xxx.py ^u
--input inputString --output outputString
```

## utf-8

```
chcp 65001
```

## 顺序执行

```
cd D:\test && start test.bat
```

更多参考：[cmd-连续执行多条命令](https://blog.csdn.net/qq_34159047/article/details/109734803)

## 判断文件是否存在

```
set checkFilePath="xxx.xxx"

if not exist %checkFilePath% (
    ren *.jpg *.xxx
) else (
    ren *.xxx *.jpg
)
```

## 创建指定大小的空文件

```
fsutil file createnew test.txt 123456
```
