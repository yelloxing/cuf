module.exports = {

  // 当前配置文件的相对路径上下文
  path: __dirname,

  // package.json路径
  pkg: '.',

  // 注册任务
  task: {

    // 任务一
    // 执行命令：cuf --config ./cuf.config.js demo1
    demo1: function (cuf, pkg, path) {

      cuf.log('执行任务一');
      cuf.print(cuf);
      cuf.print(pkg);
      cuf.print(path);

    },

    // 任务二
    // 执行命令：cuf --config ./cuf.config.js demo2
    demo2: function (cuf, pkg, path) {

      cuf.log('执行任务二');
      cuf.print(cuf);
      cuf.print(pkg);
      cuf.print(path);

    },

    // 默认任务
    // 执行命令：cuf --config ./cuf.config.js
    default: function (cuf, pkg, path) {

      cuf.log('执行默认任务');
      cuf.print(cuf);
      cuf.print(pkg);
      cuf.print(path);

    },

  }

  // // 除了定义有名称的任务，也可以只定义一个任务
  // //执行命令：cuf --config ./cuf.config.js
  // task:function(cuf, pkg, path){
  //   cuf.log('执行缺省任务');
  //     cuf.print(cuf);
  //     cuf.print(pkg);
  //     cuf.print(path);
  // }

};