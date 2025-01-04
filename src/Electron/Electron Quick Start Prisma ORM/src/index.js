const { app, BrowserWindow } = require('electron');
const { PrismaClient } = require('@prisma/client');

// 初始化 Prisma Client
const prisma = new PrismaClient();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile('src/index.html');
};

// 定义主函数，执行数据库操作
async function main() {
  // 示例数据库查询操作
  const exampleQuery = await prisma.records.findMany();
  console.log('Database query result:', exampleQuery);
}

app.whenReady().then(async () => {
  try {
    // 确保数据库查询逻辑运行在 Electron 启动之后
    await main();
  } catch (e) {
    console.error('Error in database operations:', e);
  } finally {
    // 应用关闭时，断开数据库连接
    await prisma.$disconnect();
  }

  createWindow();
});

// 处理所有窗口关闭时的逻辑
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
