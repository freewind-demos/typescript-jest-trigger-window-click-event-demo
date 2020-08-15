export default function listenOnClick(onClick: (event: Event) => void) {
  window.addEventListener('click', onClick);
};
