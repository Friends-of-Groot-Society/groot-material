

import { AppPage } from '../app.po';
import { browser, logging, element, by, } from 'protractor';
import { Alert } from 'selenium-webdriver';
describe('register page', () => {

  beforeEach(() => {
    browser.driver.get('http://localhost:4200/register');
  });

  it('should find page-title "Register" ', () => {

    let t = browser.driver.findElement(by.className('page-title')).getText();
    expect(t).toEqual('Register');
  });

  it('should should add a user', () => {

    browser.driver.findElement(by.css('#fname')).sendKeys('myFirstName');
    browser.driver.findElement(by.css('#email')).sendKeys('user@gmail.com');
    browser.driver.findElement(by.css('#password')).sendKeys('password');
    browser.driver.findElement(by.css('.register')).click();

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

