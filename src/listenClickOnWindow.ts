export default function listenClickOnWindow(onClick: (event: Event) => void) {
  window.addEventListener('click', onClick);
};
