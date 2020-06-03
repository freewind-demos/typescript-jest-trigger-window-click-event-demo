export default function hello(name: string) {
  const div = document.createElement('div')
  div.className = 'hello'
  document.body.append(div);
};
