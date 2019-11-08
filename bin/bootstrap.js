const cuf = require('../index');
const fs = require('fs');
const __ = require('@yelloxing/core.js');

module.exports = function (configUrl, taskName) {
  taskName = taskName || "default";

  // 如果配置文件存在，且是.js文件
  if (/\.js$/.test(configUrl) && fs.existsSync(configUrl) && !fs.lstatSync(configUrl).isDirectory()) {

    let configFile = require(configUrl);

    // 获取package.json文件
    let packageJSON = JSON.parse(fs.readFileSync(cuf.fullPath(configFile.pkg + '/package.json', configFile.path)));

    if (__.isFunction(configFile.task)) {
      configFile.task['default'] = configFile.task;
    }

    // 执行任务
    configFile.task[taskName](cuf, packageJSON, configFile.path);

  } else {
    cuf.error('No config file:' + configUrl);
  }
};