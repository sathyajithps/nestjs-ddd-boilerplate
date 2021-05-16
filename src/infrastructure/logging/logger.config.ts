import { LoggerService } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { transports, format } from 'winston';
import { LoggerOptions } from 'winston';
import { env } from '../../../env';

export class Logger {
  private static _logger: LoggerService;
  public static createLogger() {
    if (Logger._logger) {
      return Logger._logger;
    } else {
      const winstonLoggerOptions: LoggerOptions = {};
      switch (process.env.NODE_ENV) {
        case env.DEVELOPMENT: {
          {
            const transportsList = [
              new transports.Console({
                level: 'verbose',
                format: format.combine(format.colorize(), format.cli()),
              }),
              new transports.File({
                dirname: process.env.LOG_DIR,
                filename: process.env.DEV_LOG_FILENAME,
                eol: '\r\n<<END>>\r\n',
                format: format.combine(
                  format.timestamp(),
                  format.prettyPrint(),
                ),
                maxsize: 5000000,
                level: 'silly',
              }),
            ];
            winstonLoggerOptions.transports = transportsList;
          }
          break;
        }

        default:
          break;
      }
      Logger._logger = WinstonModule.createLogger(winstonLoggerOptions);
      return Logger._logger;
    }
  }
}
