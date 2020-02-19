
import { AppPage } from '../app.po';
import { browser, logging, element, by } from 'protractor';
import { Alert } from 'selenium-webdriver';
describe('login page', () => {

  beforeEach(() => {
    browser.driver.get('http://localhost:4200/login');
  });

  it('should find page-title "Sign In" ', () => {

    let t = browser.driver.findElement(by.className('page-title')).getText();
    expect(t).toEqual('Sign In');
  });

  it('should accept email + passoword and redirect', () => {
  
    browser.driver.findElement(by.css('#email')).sendKeys('user@gmail.com');
    browser.driver.findElement(by.css('#password')).sendKeys('password');
    browser.driver.findElement(by.css('.login')).click();
    
    let abc: Alert = browser.switchTo().alert();
    abc.accept();
    // abc.dismiss();
    browser.driver.sleep(500);
    // expect(browser.getTitle()).toContain('Friends of Groot Society');    
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

