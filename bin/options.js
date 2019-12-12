module.exports = {

  // 命令参数配置
  "config": {
    force: {
      short: 'f',
      info: '[x]Enforce the current operation.',
      demo: 'cuf --force|-f'
    },
    version: {
      short: 'v',
      info: '[0]Display the version of cuf.',
      demo: 'cuf --version|-v'
    },
    config: {
      info: '[1]Specify a configuration file.',
      demo: 'cuf --config ./cuf.config.js'
    },
    help: {
      short: 'h',
      info: '[2]Display this help text.',
      demo: 'cuf --help|-h <term>'
    },
    delete: {
      short: 'd',
      info: '[3]delete file or folder.',
      demo: 'cuf --delete|-d ./file'
    },
    copy: {
      short: 'c',
      info: '[4]copy file or folder.',
      demo: 'cuf --copy|-c ./sourceFile ./targetFile'
    },
    move: {
      short: 'm',
      info: '[5]move file or folder.',
      demo: 'cuf --move|-m ./sourceFile ./targetFile'
    },
    server: {
      short: 's',
      info: '[6]render source server.',
      demo: 'cuf --server|-s [port|8080]'
    }
  },

  // 帮助信息
  "help": `
  Usage: cuf <command>
  
  where <command> is one of:
    --help, -h, --config, --force, -f, --delete, -d, --move, -m, --copy, -c, --server, -s, --version, -v
  
  cuf --help|-h <term>       search for help on <term>
  cuf --help|-h              involved overview
    `

};