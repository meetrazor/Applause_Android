

const SELECTORS = {
    COOKIE_BTN:"//android.widget.Button[@text='Dismiss']",
    DROP_DOWN_BTN:"//android.view.View[@text='']",
    CREATE_EVENT_BTN:"//android.view.View[@text='Create Event']",
    CREATE_EVENT_PAGE:"//android.view.View[@text='Tell us about your event']",
    EVENT_CATEGORY:"//android.view.View[@text='Music']",
    EVENT_TYPE:"//android.view.View[@text='Performance']",
    SELECT_CATEGORY:"//android.view.View[@text='replacehere']",
    SELECT_TYPE:"//android.view.View[@text='replacehere']",
    HOSTED_BY:"//android.widget.EditText[@resource-id='']",
    TITLE:"//android.widget.EditText[@resource-id='e-name']",
    IMAGE:"//android.widget.EditText[@resource-id='brandimage']",
    LOGO: "//android.widget.EditText[@resource-id='logo']",
    VIDEO_LINK:"//android.widget.EditText[@resource-id='link']",
    HOST_NAME:"//android.widget.EditText[@resource-id='name']",
    HOST_EMAIL:"//android.widget.EditText[@resource-id='e-mail']",
    CONFIRMBTN:"//android.widget.EditText[@resource-id='confirm']",
    SUBMITBTN:"//android.widget.EditText[@index='5']",
    SAVE_AND_CONTINUE_BTN:"//android.widget.Button[@text='Save & Continue']"
};

class CreateEventScreen {
    get cookie_btn(){
        return $(SELECTORS.COOKIE_BTN);
    }
    get dropdown(){
        return $(SELECTORS.DROP_DOWN_BTN);
    }
    get createeventbtn(){
        return $(SELECTORS.CREATE_EVENT_BTN);
    }
    get eventpage(){
        return $(SELECTORS.CREATE_EVENT_PAGE);
    }
    get event_category(){
        return $(SELECTORS.EVENT_CATEGORY);
    }
    get event_type(){
        return $(SELECTORS.EVENT_TYPE);
    }
    get category(){
        return SELECTORS.SELECT_CATEGORY
    }
    get type(){
        return SELECTORS.SELECT_TYPE
    }
    get hosted_by(){
        return $(SELECTORS.HOSTED_BY)
    }
    get title(){
        return $(SELECTORS.TITLE)
    }
    get savebtn(){
        return $(SELECTORS.SAVE_AND_CONTINUE_BTN)
    }
    get brandimage(){
        return $(SELECTORS.IMAGE)
    }
    get brandlogo(){
        return $(SELECTORS.LOGO)
    }
    get link(){
        return $(SELECTORS.VIDEO_LINK)
    }
    get host_name(){
        return $(SELECTORS.HOST_NAME)
    }
    get host_email(){
        return $(SELECTORS.HOST_EMAIL)
    }
    get confirm_btn(){
        return $(SELECTORS.CONFIRMBTN)
    }
    get submit_btn(){
        return $(SELECTORS.SUBMITBTN)
    }
}

export default new CreateEventScreen();