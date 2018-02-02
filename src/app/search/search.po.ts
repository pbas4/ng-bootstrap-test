import { browser, by, element } from 'protractor';

export class SearchPage {
  navigateTo() {
    return browser.get('/search');
  }

  // App root test
  getTitleText () {
    return element(by.tagName('h2')).getText()
  }

}
