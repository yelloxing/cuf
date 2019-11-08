module.exports = {

  // 当前配置文件的相对路径上下文
  path: __dirname,

  // package.json路径
  pkg: '.',

  // 注册任务
  task: {

    // 任务一
    demo1: function (cuf, pkg) {

      cuf.log('执行任务一');
      cuf.print(cuf);
      cuf.print(pkg);

    },

    // 任务二
    demo2: function (cuf, pkg) {

      cuf.log('执行任务二');
      cuf.print(cuf);
      cuf.print(pkg);

    }

  }
};