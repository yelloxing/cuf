[返回首页](https://github.com/yelloxing/cuf/blob/master/README.md)

### 解析命令行参数

- 解析命令行传递的参数，转换为更容易处理的结构： 

```js
// 其中shortHands是缩写到全拼的映射
// 例子：{'-c':'--copy','-d':'--delete'}
const parsed = cuf.option(shortHands, process.argv);
```