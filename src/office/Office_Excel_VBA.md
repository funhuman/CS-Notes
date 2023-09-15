# Excel VBA

## 步骤

### 打开开发工具

如果 Excel 工具栏没有开发工具，参照本段添加开发工具。

打开Excel，点击文件，点击选项，点击自定义功能区，勾选开发工具。

图片参考：
- https://zhuanlan.zhihu.com/p/468132709（English）
- https://www.yiibai.com/vba/vba_excel_macros.html（中文，进行到第3步即可）

### 打开宏

点击开发工具，点击宏。随便输入宏名（注意有格式要求，建议使用小写字母），然后点击创建，输入代码后运行即可。

## 函数介绍

### 循环结构

```vb
    Dim i As Integer
    i = 0
    Do While i <= 8
        ' 此处输入自己的代码
        sum = sum + 1
    Loop
```

### Excel相关操作

```vb
    Dim excel As String
    Dim sum As Integer
    sum = 1
    excel = "testdata_case" & sum & ".xlsx"
    ' 打开Excel
    Windows(excel).Activate
    ' 选择工作表（expected是表名）
    Sheets("expected").Select

    ' 修改
    Range("A1").Value = "Hello, world!"
    ' 替换
    Range("C4").Value = Replace(Range("C4").Value, "　～　", " ～ ")
    ' 公式
    Range("B1").Formula = "=SUM(A1:A5)"

    ' 保存Excel
    ActiveWorkbook.Save
```

## 综合示例

> 温馨提示：批量运行时注意提前备份Excel表格。

```vb
Sub a()
    Dim excel As String
    Dim sum As Integer
    ' index
    index = 1
    While index <= 8
        excel = "testdata_case" & index & ".xlsx"
        ' 打开Excel
        Windows(excel).Activate
        ' 选择工作表（expected是表名）
        Sheets("expected").Select

        ' 修改
        Range("A1").Value = "Hello, world!"
        ' 替换
        Range("C4").Value = Replace(Range("C4").Value, "　～　", " ～ ")
        ' 公式
        Range("B1").Formula = "=SUM(A1:A5)"

        ' 保存Excel
        ActiveWorkbook.Save
        ' 循环变量自增
        index = index + 1
    Wend
    ' Message Box
    ' msgbox("Task Succeed")
End Sub
```

## 录制宏

如果需要其他操作可以在Excel里使用录制宏功能，然后将录制的代码拼接到循环体中。
