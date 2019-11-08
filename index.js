const option = require('./scripts/option');
const file = require('./scripts/file');
const print = require('./scripts/print');
const path = require('./scripts/path');

module.exports = {

  // 解析命令行参数
  option,

  // 文件操作相关
  moveSync: file.moveSync,
  deleteSync: file.deleteSync,
  copySync: file.copySync,

  // 日志打印
  log: print.log,
  print: print.print,
  error: print.error,
  linelog: print.linelog,

  // 路径
  fullPath: path.fullPath

};