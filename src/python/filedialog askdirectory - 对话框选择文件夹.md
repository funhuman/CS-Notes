
```python
from tkinter import filedialog

def select_folder():
    # 打开文件夹选择对话框
    folder_path = filedialog.askdirectory(title="请选择一个文件夹")

    if folder_path:
        process_folder(folder_path)

def process_folder(folder_path):
    pass

if __name__ == "__main__":
    select_folder()
```
