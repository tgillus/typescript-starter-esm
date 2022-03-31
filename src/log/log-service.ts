import log from 'lambda-log';
import { CorrelationId } from './correlation-id.js';
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
      correlationId: CorrelationId.id,
      function: 'function',
      principalId: 'principalId',
      version: 'version',
    };
    logger.options.dynamicMeta = () => {
      return {
        id: IdGenerator.id(),
        timestamp: new Date().toISOString(),
      };
    };

    return new LogService(logger);
  }
}
