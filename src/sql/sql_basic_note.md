# 数据库基本操作
    2020-04-24

```
# 创建数据库
CREATE DATABASE student_db;
# 删除数据库
DROP DATABASE student_db;
# 选择数据库
USE student_db;
# 创建数据表
CREATE TABLE IF NOT EXISTS student_tb(
    `stu_id` INT UNSIGNED AUTO_INCREMENT,
    `stu_name` VARCHAR(15) NOT NULL,
    `stu_password` VARCHAR(15) NOT NULL,
    PRIMARY KEY (`stu_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
# 删除数据表
DROP TABLE student_tb;
# 增加数据
INSERT INTO student_tb(stu_id, stu_name, stu_password) VALUES('1','张三','男');
# 删除数据
DELETE FROM student_tb WHERE stu_id = 1;
# 查询数据
SELECT * FROM student_tb WHERE stu_id = 1;
# 修改数据
UPDATE student_tb SET stu_id = 2 WHERE stu_id = 1;

# 注意
-- 引号：反引号用于区分关键字与标识符，单引号和双引号用于包括字符串。
-- 星号：删除表中数据不用星号，查询需要使用星号。
-- 注释：单行注释用 # 或者 --(空格)，多行注释 /* */。
```
