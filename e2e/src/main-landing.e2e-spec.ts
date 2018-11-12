import {browser, by, element} from 'protractor';

describe('Simple e2e test', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    const subject = browser.getTitle();
    expect(subject).toBe('AngularSpice2');
  });

  it('should allow a user to navigate', () => {
    element.all(by.css('article img')).first().click();
    const text = element.all(by.css('ul>li')).first().getText();
    expect(text).toContain('2 strips thick cut bacon');
  });
});
