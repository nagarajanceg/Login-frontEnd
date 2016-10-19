import { LoginAgPage } from './app.po';

describe('login-ag App', function() {
  let page: LoginAgPage;

  beforeEach(() => {
    page = new LoginAgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
