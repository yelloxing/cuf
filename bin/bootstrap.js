const cuf = require('../index');
const fs = require('fs');

module.exports = function (configUrl, taskName) {

  // 如果配置文件存在，且是.js文件
  if (/\.js$/.test(configUrl) && fs.existsSync(configUrl) && !fs.lstatSync(configUrl).isDirectory()) {

    let configFile = require(configUrl);

    // 获取package.json文件
    let packageJSON = JSON.parse(fs.readFileSync(cuf.fullPath(configFile.pkg + '/package.json', configFile.path)));

    // 执行任务
    configFile.task[taskName](cuf, packageJSON);

  } else {
    cuf.error('No config file:' + configUrl);
  }
};