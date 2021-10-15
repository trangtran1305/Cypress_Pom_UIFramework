/// <reference types="cypress" />
import BasePage from '../PageObjects/basepage'

const ELEMENTS = {
    ACCOUNT_MENU : "a[class*='account']",
    LOGIN_LINK : "a[href*='login']"
} ;

class HomePage extends BasePage {

    clickAccountMenu() {
        this.clickOn(ELEMENTS.ACCOUNT_MENU);
    }
    clickLoginLink() {
        this.clickOn(ELEMENTS.LOGIN_LINK);
    }
}
export default HomePage