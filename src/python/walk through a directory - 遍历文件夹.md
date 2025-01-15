文件遍历
os.walk(root_path)

os.walk 是一个递归遍历目录树的方法。它会生成一个三元组 (root, dirs, files)：
- root：当前遍历的目录路径。
- dirs：当前目录下的子目录列表。
- files：当前目录下的文件列表。

遍历当前目录中的所有文件（由 os.walk 提供的 files 列表）。
你可以在每次循环中对 filename 进行操作，如筛选符合某些条件的文件，或者读取文件内容。
代码逻辑示例：

```python
import os

root_path = "./target_directory"  # 替换为目标路径

for root, dirs, files in os.walk(root_path):  # 遍历目录树
    for filename in files:  # 遍历当前目录的文件
        file_path = os.path.join(root, filename)  # 获取文件的完整路径
        print(f"文件路径: {file_path}")
```
