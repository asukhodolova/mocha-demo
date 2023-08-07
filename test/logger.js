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

module.exports = pino(transport);
