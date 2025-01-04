## 前言

[Electron Quick Start](../Electron%20Quick%20Start/README.zh_CN.md) 记录了配置开发环境（包括安装 nvm、Node.js、以及 Electron）和初始化项目的步骤。

通过这些步骤，创建了一个简单的 Electron 程序，展示了“Hello World!”的页面。

本笔记记录了在这之后，

## 准备数据库

创建一个数据库 `electron_db`。

创建一个表 `records`。

```sql
CREATE TABLE `records` (
	`id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
	`title` VARCHAR(255) NOT NULL COLLATE 'armscii8_bin',
	`content` TEXT NULL DEFAULT NULL COLLATE 'armscii8_bin',
	`create_time` DATETIME NOT NULL DEFAULT (now()),
	`update_time` DATETIME NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`is_deleted` BIT(1) NOT NULL DEFAULT (0),
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='armscii8_bin'
ENGINE=InnoDB
;
```

插入一条数据。

```sql
INSERT INTO `records` (`title`, `content`) VALUES ('Test', 'Hello, world');
```


## 导入 Prisma ORM

将 Prisma CLI 作为开发依赖项添加到项目中。

```cmd
cnpm install prisma --save-dev
```

参考结果：

```
√ Linked 6 latest versions fallback to C:\Users\User\Documents\GitHub\CS-Notes\src\Electron\Electron Quick Start Prisma ORM\node_modules\.store\node_modules
√ Run 2 script(s) in 4s.
√ Installed 1 packages on C:\Users\User\Documents\GitHub\CS-Notes\src\Electron\Electron Quick Start Prisma ORM
√ All packages installed (6 packages installed from npm registry, used 7s(network 7s), speed 2.92MB/s, json 7(17.29MB), tarball 4.12MB, manifests cache hit 0, etag hit 0 / miss 0)

devDependencies:
+ prisma ^6.1.0
```

接下来，使用以下命令创建 Prisma 模式 文件模板，从而设置 Prisma ORM 项目

```cmd
cnpm install prisma --save-dev
```

## 连接数据库

本笔记连接的是 MySQL 数据库，其他的数据库连接 URL 可以参考[Prisma ORM 连接 URL](https://prisma.org.cn/docs/orm/reference/connection-urls#format)。

将下面的URL（给出的第一行是格式，后面的是示例）添加到环境变量`electron_db_url`。


```
mysql://USER:PASSWORD@HOST:PORT/DATABASE
mysql://root:12345678@localhost:3306/electron_db?charset=utf8
```

然后修改 `prisma/schema.prisma` 文件

```
datasource db {
--provider = "postgresql"
++provider = "MySQL"
--url      = env("DATABASE_URL")
++url      = env("electron_db_url")
}
```

运行以下命令生成的数据库的数据模型

```cmd
npx prisma db pull
```

## 安装并生成 Prisma Client

```
cnpm install @prisma/client
```

```
npx prisma generate
```

## 查询数据库

参考[教程](https://prisma.org.cn/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/querying-the-database-typescript-postgresql)修改src/index.js，查询数据库。
