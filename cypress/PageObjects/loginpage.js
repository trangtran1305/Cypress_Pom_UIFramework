/// <reference types="cypress" />
import BasePage from '../PageObjects/basepage'

const ELEMENTS = {
    EMAIL_TEXTBOX : "#email",
    PASSWORD_TEXTBOX : "#pass",
    LOGIN_BUTTON : "button[title='Login']"
} ;

class LoginPage extends BasePage {

    verifyLoginPageIsDisplayed() {
        this.waitTillElementIsDisplayed(ELEMENTS.EMAIL_TEXTBOX);
        this.waitTillElementIsDisplayed(ELEMENTS.PASSWORD_TEXTBOX);
        this.waitTillElementIsDisplayed(ELEMENTS.LOGIN_BUTTON);
    }

    doLogin(email, password) {
        this.typeIn(ELEMENTS.EMAIL_TEXTBOX, email);
        this.typeIn(ELEMENTS.PASSWORD_TEXTBOX, password);
        this.clickOn(ELEMENTS.LOGIN_BUTTON);
    }
}
export default LoginPage