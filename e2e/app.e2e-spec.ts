import { MyCompleteProjectPage } from './app.po';

describe('my-complete-project App', () => {
  let page: MyCompleteProjectPage;

  beforeEach(() => {
    page = new MyCompleteProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
