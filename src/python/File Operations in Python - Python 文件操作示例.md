以下是关于如何使用 Python 读写文件的几个简单例子：


## 写入文件

```python
# 写入文件内容
with open("example.txt", "w", encoding="utf-8") as file:
    file.write("Hello, Python!\n")
    file.write("这是一个写入文件的例子。\n")
```
说明：
- 使用 open() 打开文件，模式 "w" 表示写入模式（会覆盖文件内容）。
- encoding="utf-8" 用于支持写入中文或其他非 ASCII 字符。
- 使用 with 确保文件使用完后自动关闭。

## 读取文件

```python
# 读取文件内容
with open("example.txt", "r", encoding="utf-8") as file:
    content = file.read()  # 一次性读取所有内容
    print(content)
```
说明：
- 模式 "r" 表示读取模式。
- file.read() 读取整个文件的内容为字符串。

## 按行读取

```python
# 按行读取文件
with open("example.txt", "r", encoding="utf-8") as file:
    for line in file:
        print(line.strip())  # 使用 strip() 去除行末的换行符
```
说明：
遍历文件对象会逐行读取，适合处理大文件。

## 追加写入

```python
# 追加写入内容
with open("example.txt", "a", encoding="utf-8") as file:
    file.write("追加的一行内容。\n")
```
说明：
模式 "a" 表示追加模式，不会覆盖原有内容。

## 读取和写入

```python
# 读取和写入
with open("example.txt", "r+", encoding="utf-8") as file:
    content = file.read()
    print("原文件内容：", content)
    file.write("\n这是在文件末尾追加的一行。")
```
说明：
"r+" 表示同时支持读和写操作，指针默认在文件开头。

## 处理异常

```python
try:
    with open("nonexistent.txt", "r", encoding="utf-8") as file:
        content = file.read()
except FileNotFoundError:
    print("文件未找到，请检查文件路径！")
```
说明：
使用 try...except 捕获可能的异常（如文件不存在）。
