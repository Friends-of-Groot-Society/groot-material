
import { AppPage } from '../app.po';
import { browser, logging, element, by } from 'protractor';
import { Alert } from 'selenium-webdriver';
describe('grootologue page', () => {

  beforeEach(() => {
    browser.driver.get('http://localhost:4200/grootedex');
  });

  it('should find grootologue page ', () => {

    let t = browser.driver.findElement(by.className('groot-title')).getText();
    expect(t).toEqual('Grootologue');
  });

  it('should accept author, title, name,type input', () => {
  
    browser.driver.findElement(by.css('#author')).sendKeys('NewAuthor');
    browser.driver.findElement(by.css('#title')).sendKeys('NewTitle');
    browser.driver.findElement(by.css('#name')).sendKeys('NewName');
    browser.driver.findElement(by.css('#type')).sendKeys('newType');
    browser.driver.findElement(by.css('.button-add')).click();
     
    // expect(browser.getTitle()).toContain('Friends of Groot Society');    
  });

 it('should add a new entry to the table', () => {
   
    browser.driver.findElement(by.css('.button-update')).click();
    // expect [Symbol]..
     
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

