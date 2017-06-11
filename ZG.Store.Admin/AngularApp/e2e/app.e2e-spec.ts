import { AngularCliProj1Page } from './app.po';

describe('angular-cli-proj1 App', () => {
  let page: AngularCliProj1Page;

  beforeEach(() => {
    page = new AngularCliProj1Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
