const pino = require('pino');

const transport = pino.transport({
  targets: [
    {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
    // {
    //   target: 'pino/file',
    //   options: { destination: './zebrunner.log' }
    // },
    {
      target: "@zebrunner/javascript-agent-mocha/pino-transport",
    },
  ],
});

module.exports = pino({
  formatters: {
    bindings(bindings) {
      return { time_formatted: '2023-06-07T11:05:18.548Z' };
    },
  },
  timestamp: false,
  messageKey: 'message',
}, transport);
