import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor'; 

describe('groot-project App', () => {
  let page: AppPage;
 
  beforeEach(() => {
    page = new AppPage(); 
  });

  it('should display Guardians of the Galaxy API', () => { 
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Guardians of the Galaxy API');
  });

   it('should display tab title Friends of Groot Society', () => {
    browser.get('http://localhost:4200');
    expect(browser.getTitle()).toContain('Friends of Groot Society');  
    
  });
 
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
