import listenClickOnWindow from "./listenClickOnWindow";

beforeEach(() => {
  jest.resetAllMocks();
})

describe('clickOnWindow', () => {

  const onClick = jest.fn();

  afterEach(() => {
    window.removeEventListener('click', onClick);
  })

  it('works with manually created click event', () => {
    listenClickOnWindow(onClick);
    window.dispatchEvent(new Event('click'))
    expect(onClick).toHaveBeenCalled();
  })

  it('works with real triggered click event', () => {
    listenClickOnWindow(onClick);
    window.document.body.click();

    expect(onClick).toHaveBeenCalled();
  })

})

