# cuf
☘ 提供node.js相关基础接口，帮助快速开发。

<a href="https://yelloxing.github.io/npm-downloads/?interval=7&packages=cuf"><img src="https://img.shields.io/npm/dm/cuf.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/cuf"><img src="https://img.shields.io/npm/v/cuf.svg" alt="Version"></a>
<a href="https://github.com/yelloxing/cuf/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/cuf.svg" alt="License"></a>

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/yelloxing/cuf/issues)！

## How to use?
首先，这是一个辅助你开发node.js脚本的东西（比如对webpack或rollup等打包的补充），你有两种方式可以使用：

- 第一种：通过命令行或package.json命令的方式；
- 第二种：使用[cuf.config.js](https://github.com/yelloxing/cuf/blob/master/test/demo/cuf.config.js)配置文件方式。

我们内置了一些方法来辅助你编辑自定义插件或配置文件，首先需要获得cuf（配置文件中已经帮你注入了）：

```js
const cuf = require('cuf');
```

- [解析命令行参数](https://github.com/yelloxing/cuf/blob/master/docs/option.md)
- [文件操作相关](https://github.com/yelloxing/cuf/blob/master/docs/file.md)
- [日志打印](https://github.com/yelloxing/cuf/blob/master/docs/print.md)
- [路径](https://github.com/yelloxing/cuf/blob/master/docs/path.md)
- [服务器](https://github.com/yelloxing/cuf/blob/master/docs/server.md)

## License

[MIT](https://github.com/yelloxing/cuf/blob/master/LICENSE)

Copyright (c) 2019-2020 走一步 再走一步
