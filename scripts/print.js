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