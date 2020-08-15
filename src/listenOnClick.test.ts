import listenOnClick from "./listenOnClick";

beforeEach(() => {
  jest.resetAllMocks();
})

describe('listenOnClick', () => {

  const onClick = jest.fn();

  afterEach(() => {
    window.removeEventListener('click', onClick);
  })

  it('works with manually created click event', () => {
    listenOnClick(onClick);
    window.dispatchEvent(new Event('click'))
    expect(onClick).toHaveBeenCalled();
  })

  it('works with real triggered click event', () => {
    listenOnClick(onClick);
    window.document.body.click();

    expect(onClick).toHaveBeenCalled();
  })

})

