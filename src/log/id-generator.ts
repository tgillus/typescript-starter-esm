import { nanoid } from 'nanoid';

export class IdGenerator {
  private static readonly correlationId = IdGenerator.generate();

  static correlation() {
    return IdGenerator.correlationId;
  }

  static generate() {
    return nanoid();
  }
}
