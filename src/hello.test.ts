import hello from './hello';

test('hello', () => {
  hello('jest');
  expect(document.querySelector('div.hello')).toBeInTheDocument();
})
