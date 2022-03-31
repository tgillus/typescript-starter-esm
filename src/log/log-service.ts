import log from 'lambda-log';
import { IdGenerator } from './id-generator.js';

export class LogService {
  constructor(private readonly logger: log.LambdaLog) {}

  somethingHappended() {
    this.logger.info('something happened');
  }

  static build() {
    const logger = new log.LambdaLog({
      tags: ['function', 'version'],
    });

    logger.options.dev = true;
    logger.options.meta = {
      correlationId: IdGenerator.correlation(),
      function: 'function',
      principalId: 'principalId',
      version: 'version',
    };
    logger.options.dynamicMeta = () => {
      return {
        id: IdGenerator.generate(),
        timestamp: new Date().toISOString(),
      };
    };

    return new LogService(logger);
  }
}
