import { AppPage } from './app.po';
import { SearchPage } from '../src/app/search/search.po'
import { browser, by, element } from 'protractor';


describe('ng-bootstrap App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  // Input Title test
  it('Should modify the title using the input', () => {
    page.navigateTo()
    expect(page.getTitleText()).toBe('Yo soy tu padre')
    expect(page.getUpdateButton().getAttribute('disabled')).toBe('true')

    page.getInput().sendKeys('New title')
    expect(page.getUpdateButton().getAttribute('disabled')).toBe(null)

    page.getUpdateButton().click()

    expect(page.getTitleText()).toBe('New title')

    page.getResetButton().click()
    expect(page.getTitleText()).toBe('Yo soy tu padre')

  })
});

// Search component
describe('search component', () => {
  let page: SearchPage

  beforeEach(() => {
    page = new SearchPage()
  })

  it('Should return the h2', () => {
    page.navigateTo()
    expect(page.getTitleText()).toBe('Search')
  })

})
