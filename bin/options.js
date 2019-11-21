module.exports = {

  // 命令参数配置
  "config": {
    help: {
      short: 'h',
      info: '[1]Display this help text.',
      demo: 'cuf --help|-h <term>'
    },
    force: {
      short: 'f',
      info: '[x]Enforce the current operation.',
      demo: 'cuf --force|-f'
    },
    config: {
      info: '[0]Specify a configuration file.',
      demo: 'cuf --config ./cuf.config.js'
    },
    delete: {
      short: 'd',
      info: '[2]delete file or folder.',
      demo: 'cuf --delete|-d ./file'
    },
    copy: {
      short: 'c',
      info: '[3]copy file or folder.',
      demo: 'cuf --copy|-c ./sourceFile ./targetFile'
    },
    move: {
      short: 'm',
      info: '[4]move file or folder.',
      demo: 'cuf --move|-m ./sourceFile ./targetFile'
    }
  },

  // 帮助信息
  "help": `
  Usage: cuf <command>
  
  where <command> is one of:
    --help, -h, --config, --force, -f, --delete, -d, --move, -m, --copy, -c
  
  cuf --help|-h <term>       search for help on <term>
  cuf --help|-h              involved overview
    `

};

