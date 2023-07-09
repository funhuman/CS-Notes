# PowerShell修改文件时间

## 修改文件时间

### 文件

例如要修改的文件的文件名是`文件.txt`，要修改的时间是`2023-07-08 13:53:11`，那么使用下面代码。

```powershell
(ls "文件.txt").CreationTime="2023-07-08 13:53:11"
(ls "文件.txt").LastWriteTime="2023-07-08 13:53:11"
(ls "文件.txt").LastAccessTime="2023-07-08 13:53:11"
```

### 文件夹

修改文件夹的时间同理。

```powershell
(Get-ItemProperty "文件夹名").LastWriteTime="2023-07-08 13:53:11"
```

### 递归

修改文件夹下的所有文件，可以使用下面代码。

```powershell
Get-ChildItem -recurse | ForEach-Object { $_.LastWriteTime="2023-07-08 13:53:11" }
```

## 参考文章

- [about Properties - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_properties?view=powershell-7.3)
- [Windows 修改文件时间（创建、最后修改、最后访问时间） - 知乎文章](https://zhuanlan.zhihu.com/p/50292485)
