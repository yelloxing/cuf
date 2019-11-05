const option = require('./scripts/option');
const file = require('./scripts/file');

module.exports = {

  // 解析命令行参数
  option,

  // 文件操作相关
  moveSync: file.moveSync,
  deleteSync: file.deleteSync,
  copySync: file.copySync

};