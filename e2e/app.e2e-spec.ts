import { NgRealworldPage } from './app.po';

describe('ng-realworld App', () => {
  let page: NgRealworldPage;

  beforeEach(() => {
    page = new NgRealworldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
