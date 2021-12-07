

const SELECTORS = {
    SIGN_IN_BTN:"//android.widget.Button[@text='Sign In With Zoom']",
    ALERT_BTN:"//android.widget.TextView[@text='Got It!']",
    EMAIL_INPUT:"//android.widget.EditText[@resource-id='email']",
    PASSWORD_INPUT:"//android.widget.EditText[@resource-id='password']",
    SIGNIN_BTN:"//android.widget.Button[@text='Sign In']",
    SUCCESS_ALERT:"//android.view.View[@text='Sign In Successful']"
};

class HomeScreen {
 
    get signin_btn(){
        return $(SELECTORS.SIGN_IN_BTN);
    }
    get alert_btn(){
        return $(SELECTORS.ALERT_BTN);
    }
    get email(){
        return $(SELECTORS.EMAIL_INPUT);
    }
    get password(){
        return $(SELECTORS.PASSWORD_INPUT);
    }
    get signin(){
        return $(SELECTORS.SIGNIN_BTN);
    }
    get success_alert(){
        return $(SELECTORS.SUCCESS_ALERT);
    }
}

export default new HomeScreen();
