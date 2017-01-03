import { RijschemaPage } from './app.po';

describe('rijschema App', function() {
  let page: RijschemaPage;

  beforeEach(() => {
    page = new RijschemaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
