/* eslint-disable no-console */
import { isValid, parse } from 'date-fns';

const validDate = parse('2022-03-31', 'yyyy-MM-dd', new Date());
const invalidDate = parse('2022-03-32', 'yyyy-MM-dd', new Date());

console.log(isValid(validDate));
console.log(isValid(invalidDate));
