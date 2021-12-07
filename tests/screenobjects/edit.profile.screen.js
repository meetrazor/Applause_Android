

const SELECTORS = {
    DROP_DOWN_BTN:"//android.view.View[@text='']",
    EDIT_PROFILE: "//android.view.View[@text='edit profile']",
    FIRST_NAME: "//android.widget.EditText[@resource-id='first-name']",
    FIRST_NAME_ALERT: "//android.view.View[@resource-id='first-name']",
    LAST_NAME: "//android.widget.EditText[@resource-id='last-name']",
    LAST_NAME_ALERT: "//android.view.View[@resource-id='last-name']",
    BIO: "//android.widget.EditText[@resource-id='bio']",
    ADD_PLACES:"//android.widget.Button[@text='Add Places']",
    PLACE_NAME:"//android.widget.EditText[@resource-id='name']",
    PLACE_URL:"//android.widget.EditText[@resource-id='url']",
    SAVE_BTN:"//android.widget.Button[@resource-id='Submit']"
};

class EditProfileScreen {
    get drop_down_btn(){
        return $(SELECTORS.DROP_DOWN_BTN);
    }
    get edit_profile(){
        return $(SELECTORS.EDIT_PROFILE);
    }
    get first_name(){
        return $(SELECTORS.FIRST_NAME);
    }
    get first_name_alert(){
        return $(SELECTORS.FIRST_NAME_ALERT);
    }
    get last_name(){
        return $(SELECTORS.LAST_NAME);
    }
    get last_name_alert(){
        return $(SELECTORS.LAST_NAME_ALERT);
    }
    get bio(){
        return $(SELECTORS.BIO);
    }
    get submit_btn(){
        return $(SELECTORS.SAVE_BTN);
    }
    get add_places(){
        return $(SELECTORS.ADD_PLACES);
    }
    get place_name(){
        return $(SELECTORS.PLACE_NAME);
    }
    get place_url(){
        return $(SELECTORS.PLACE_URL);
    }
}

export default new EditProfileScreen();