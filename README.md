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
- 第二种：使用cuf.config.js配置文件方式（可以自定义插件或第三方插件，开发中）。

我们内置了一些方法来辅助你编辑自定义插件或配置文件，首先需要获得cuf（配置文件中可能已经帮你注入了）：

```js
const cuf = require('cuf');
```

### 解析命令行参数

- 解析命令行传递的参数，转换为更容易处理的结构： 

```js
// 其中shortHands是缩写到全拼的映射
// 例子：{'-c':'--copy','-d':'--delete'}
const parsed = cuf.option(shortHands, process.argv);
```

### 文件操作相关

- 移动文件或文件夹

```js
cuf.moveSync(source, target);
```

- 删除文件或文件夹

```js
cuf.deleteSync(target);
```

- 复制文件或文件夹

```js
cuf.copySync(source, target);
```

### 日志打印

- 打印一些重要提示信息

```js
cuf.log(txt);
```

- 打印最普通的提示

```js
cuf.print(txt);
```

### 路径

- 获取文件或文件夹的全路径

```js
// contextPath表示路径上下文，可选，默认当前命令行路径
cuf.fullPath(pathString[, contextPath]);
```

## License

[MIT](https://github.com/yelloxing/cuf/blob/master/LICENSE)

Copyright (c) 2007夏-present 走一步 再走一步
