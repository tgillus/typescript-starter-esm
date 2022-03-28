/* eslint-disable no-console */
import { isValid, parse } from 'date-fns';
import yup from 'yup';

const fooSchema = yup.object({
  date: yup
    .string()
    .trim()
    .test(
      'isValidId',
      'date must be a valid date in the following format: yyyy-MM-dd',
      (value) => {
        if (!value) {
          return false;
        }

        return isValid(parse(value, 'yyyy-MM-dd', new Date()));
      }
    )
    .required(),
  ids: yup
    .array()
    .transform((value, originalValue) => {
      const originalValueWithoutSpaces = originalValue.replace(/\s*/g, '');

      return originalValueWithoutSpaces.split(',');
    })
    .of(yup.string().required())
    .test('isValidDate', 'ids must be combination of 1, 2, or 3', (value) => {
      if (!value) {
        return false;
      }
      console.log('value', value.join(','));

      return /^(1|2|3)(,(1|2|3))*$/.test(value.join(','));
    })
    .required(),
});

try {
  console.log(fooSchema.validateSync({ date: '2022-03-31', ids: ' 1, 2,3 ' }));
} catch (error) {
  console.error(error);
}
