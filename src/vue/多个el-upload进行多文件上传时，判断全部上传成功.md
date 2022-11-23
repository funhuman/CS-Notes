# 多个 el-upload 进行多文件上传时，判断全部上传成功

## 代码

HTML部分
```
<template slot-scope="scope">
  <el-upload
    :headers="..."
    :action="..."
    multiple
    accept="..."
    :ref="'upload'+scope.$index"
    :file-list="scope.row.fileList"
    :show-file-list="false"
    :on-change="handleUploadChange"
    :on-success="(param) => handleUploadSuccess(param, scope.$index)"
    :disabled="..."
  >
    <el-button
      type="primary"
      icon="el-icon-folder-opened"
    />
  </el-upload>
  <el-progress v-if="fileUploadIndex" :percentage="(fileUploadIndex / fileUploadCount * 100).toFixed()" />
  <span v-if="fileUploadIndex" class="text-align">上传进度：{{ fileUploadIndex }} / {{ fileUploadCount }}</span>
</template>
```

JS部分
```
data() {
    return {
      fileUploadIndex: 0,
      fileUploadCount: 0,
    }
},

methods: {
  handleUploadChange(file, fileList) {
    // 获取待上传文件的数量
    this.fileUploadCount = fileList.length
  },
  handleUploadSuccess(param, index) {
    // 记录已上传文件的数量
    this.fileUploadIndex++
    // 判断是否全部上传成功
    if (this.fileUploadIndex === this.fileUploadCount) {
      this.fileUploadIndex = 0
      this.$refs['upload' + index].clearFiles()
    }
  },
},
```

## 注意点

一、参数要对应
```
  handleUploadChange(file, fileList)
  handleUploadSuccess(param, index)
```
两个方法中的`file`和`param`看似没有用，可以删除之后看看效果。

二、参数的绑定
```
:ref="'upload'+scope.$index"
```
el-upload 参数中的 `:`（`v-bind`），如果不加的话，就无法获取到 index 值了。

## 参考

- [el-upload多文件上传上传，怎么监听全部上传成功了？](https://segmentfault.com/q/1010000042307589)
- [vue的el-upload上传图片（多选上传，怎么拿到最后一张上传结束状态）(表单提交，异步上传问题)](https://blog.csdn.net/zhj1329000/article/details/125069103)
- [组件中多个el-upload存在导致上传图片失效的问题](https://blog.csdn.net/weixin_42157001/article/details/122822743)
