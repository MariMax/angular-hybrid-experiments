import { AngularHybrid2Page } from './app.po';

describe('angular-hybrid2 App', () => {
  let page: AngularHybrid2Page;

  beforeEach(() => {
    page = new AngularHybrid2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
