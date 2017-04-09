import { Angular4MaterialWebPage } from './app.po';

describe('angular4-material-web App', () => {
  let page: Angular4MaterialWebPage;

  beforeEach(() => {
    page = new Angular4MaterialWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
