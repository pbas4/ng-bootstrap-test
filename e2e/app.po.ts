import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  // App root test
  getTitleText () {
    return element(by.id('title')).getText()
  }
  getInput () {
    return element(by.css('.test-form input'))
  }
  getUpdateButton () {
    return element(by.buttonText('Change title'))
  }
  getResetButton () {
    return element(by.buttonText('Reset title'))
  }

}
