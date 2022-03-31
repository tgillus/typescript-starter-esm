import { IdGenerator } from './id-generator.js';

export class CorrelationId {
  public static readonly id = IdGenerator.id();
}
