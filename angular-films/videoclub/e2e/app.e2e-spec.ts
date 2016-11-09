import { VideoclubPage } from './app.po';

describe('videoclub App', function() {
  let page: VideoclubPage;

  beforeEach(() => {
    page = new VideoclubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
