import { RestoranPage } from './app.po';

describe('restoran App', () => {
  let page: RestoranPage;

  beforeEach(() => {
    page = new RestoranPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
