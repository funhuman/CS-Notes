# Git Operation

## 撤销记录类

### 修改上次提交

```
git commit --amend --author "a <abc@xyz>"
git commit --amend --date "2023-12-12 08:16:00"
```

### 撤销 commit

> https://juejin.cn/post/7136171249809489934

```
git reset --soft HEAD^

git reset --soft <版本号>
```

### 合并 commit

```
git rebase -i HEAD~2
```

在`git-rebase-todo`文件中修改其他的分支为s，例如：
```
pick 05c31c5
s a96e77e
```

在`COMMIT_EDITMSG`文件中修改提交的comment。

### 放弃本地修改同步远端分支

> https://blog.csdn.net/sinat_36184075/article/details/80115000

```
git fetch --all && git reset --hard origin/feature/test
```

### 恢复 reset

```
git reflog
```

```
58b5c4515 (HEAD -> feature/test) HEAD@{0}: reset: moving to HEAD^
c4d752eb7 HEAD@{1}: commit (merge): 1
58b5c4515 (HEAD -> feature/test) HEAD@{2}: checkout: moving from feature/test to feature/test
```

找到上个提交，然后恢复。


```
git reset --hard c4d742eb7
```

## 分支类

### 放弃本地修改切分支

> https://www.cnblogs.com/yhjoker/p/11776240.html

```
git checkout -f
```

### 合并分支

保留分支记录的合并

```
git merge develop
```

压缩合并，形成一次提交
```
git merge --squash origin/develop
```

## Stash

清空Stash
```
git stash clear
```

## Diff

```
git diff develop
```
