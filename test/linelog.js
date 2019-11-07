const cuf = require('../index');

let index = 0;
setInterval(function () {
  index += 1;

  let txt = '[1] - ' + Math.random();

  if (index < 10) txt += ' - ' + Math.random();

  if (index < 40) txt += '\n[2] - ' + Math.random();
  if (index < 30) txt += '\n[3] - ' + Math.random();
  if (index < 20) txt += '\n[4] - ' + Math.random();
  if (index > 40) txt += '\n[5] - ' + Math.random();

  cuf.linelog("\x1B[33m" + txt + "\x1B[39m");

  if (index === 50) {
    cuf.linelog('同行打印结束\n');
    cuf.log('exit');
    process.exit(0);
  }

}, 300);