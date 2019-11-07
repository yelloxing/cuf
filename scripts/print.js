/**
 * 
 * 打印一些重要提示信息
 * 
 * @param {string} txt 需要打印的文字
 * 
 */
exports.log = function (txt) {
  console.log("\x1B[33m" + txt + "\x1B[39m");
};

/**
 * 
 * 打印最普通的提示
 * 
 * @param {string} txt 需要打印的文字
 * 
 */
exports.print = function (txt) {
  console.log(txt);
};

const MOVE_LEFT = Buffer.from('1b5b3130303044', 'hex').toString();
const MOVE_UP = Buffer.from('1b5b3141', 'hex').toString();
const CLEAR_LINE = Buffer.from('1b5b304b', 'hex').toString();

/**
 * 
 * 不换行打印
 * 
 * @param {string} txt 需要打印的文字
 * 
 */
exports.linelog = (function (stream) {

  // 用来记录前置有多少行需要回退
  let prevLineCount = 0;

  // 返回实际同行打印的方法
  return function (nextStr) {
    let txt = "";

    // 清除屏幕
    for (let i = 0; i < prevLineCount; i++) {
      txt += MOVE_LEFT + CLEAR_LINE + (i < prevLineCount - 1 ? MOVE_UP : '');
    }

    // 写入屏幕
    stream.write(txt + nextStr);

    // 重新计算需要回滚多少行
    // 目前没有考虑一行文字太多被迫换行情况
    prevLineCount = nextStr.split('\n').length;

  };
})(process.stdout);