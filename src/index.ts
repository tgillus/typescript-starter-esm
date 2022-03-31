/* eslint-disable no-console */
import { execa } from 'execa';
import _ from 'lodash';
import { add } from './add.js';
import { ListBucketsCommand, S3Client } from '@aws-sdk/client-s3';
import { LogService } from './log/log-service.js';
import { CorrelationId } from './log/correlation-id.js';

console.log(add(1, 2));

const { stdout } = await execa('echo', ['unicorns']);
console.log(stdout);

console.log(_.capitalize('foo'));

const s3Client = new S3Client({});
const response = await s3Client.send(new ListBucketsCommand({}));

console.log(response.Buckets);

function foo<T>(val: T | number): val is number {
  return typeof val === 'number';
}

console.log(foo(true));
console.log(foo(5));

console.log(CorrelationId.id);
LogService.build().somethingHappended();
console.log(CorrelationId.id);
