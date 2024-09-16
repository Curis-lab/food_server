import { getLogger, configure } from 'log4js';

export enum LogLevel {
  debug = 'debug',
  info = 'info',
  warn = 'warn',
  error = 'error',
  fatal = 'fatal',
}

configure({
  appenders: {
    console: { type: 'console' },
  },
  categories: {
    default: {
      appenders: ['console'],
      level: 'info',
    },
  },
});

export const logger = getLogger();
