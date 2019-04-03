import 'jest-dom/extend-expect'

import hello from './hello';

test('hello', () => {
  hello('jest');
  expect(document.querySelector('div.hello')).toBeInTheDocument();
})
