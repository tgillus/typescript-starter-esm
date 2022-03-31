import { nanoid } from 'nanoid';

export class IdGenerator {
  static id() {
    return nanoid();
  }
}
