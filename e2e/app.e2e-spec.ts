import { Angular2WithPolymerModalPage } from './app.po';

describe('angular2-with-polymer-modal App', () => {
  let page: Angular2WithPolymerModalPage;

  beforeEach(() => {
    page = new Angular2WithPolymerModalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
