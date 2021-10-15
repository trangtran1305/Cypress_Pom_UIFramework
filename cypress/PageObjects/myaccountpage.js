/// <reference types="cypress" />
import BasePage from '../PageObjects/basepage'

const ELEMENTS = {
    PAGE_TITLE : ".page-title>h1",
    MOBILE_MENU : "a[href*='mobile']",
    TV_MENU : "a[href*='tv']"
} ;

class MyAccountPage extends BasePage {

    verifyPageTitle(text) {
        this.verifyTextElement(ELEMENTS.PAGE_TITLE, text);
        
    }
    clickMobileMenu() {
        this.clickOn(ELEMENTS.MOBILE_MENU);
    }
    clickTvMenu() {
        this.clickOn(ELEMENTS.TV_MENU);
    }
}
export default MyAccountPage