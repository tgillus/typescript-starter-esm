import log from 'lambda-log';
const { LambdaLog } = log;

const logger = new LambdaLog({
  tags: ['function', 'version'],
});

logger.options.dev = true;

logger.options.meta = {
  function: 'function',
  principalId: 'principalId',
  version: 'version',
};

logger.info('foo', { bar: 'baz' }, ['info']);
logger.warn('foo', { bar: 'baz' }, ['warn']);
logger.error(new Error('foo'), { bar: 'baz' }, ['error']);
