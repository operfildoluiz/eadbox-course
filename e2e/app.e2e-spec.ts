import { EadboxCoursePage } from './app.po';

describe('eadbox-course App', function() {
  let page: EadboxCoursePage;

  beforeEach(() => {
    page = new EadboxCoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
