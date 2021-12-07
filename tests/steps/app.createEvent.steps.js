import {Then, When, Given} from '@cucumber/cucumber';
import HomeScreen from '../screenobjects/home.screen';  
import login from '../data/Logins.json'
import CreateEventScreen from '../screenobjects/create.event.screen';
import EventDetails from '../data/CreateEvent.json'
import Gestures from '../helpers/Gestures'

Given(/^I open app$/, async () => {
    await driver.pause(5000) 
    const contexts = await driver.getContexts();
    await driver.switchContext(contexts[0])
});
When(/^I Click on Sign in With Zoom$/, async () => {
    await driver.pause(5000) 
    await HomeScreen.signin_btn.click()
    await driver.pause(2000)
    await HomeScreen.alert_btn.click()
});
Then(/^I Should verify Sign In$/, async () => {
    await driver.pause(10000)
    try{
        await HomeScreen.success_alert.waitForDisplayed({ timeout: 10000 })
    } catch(e){
        await HomeScreen.email.setValue(login.Administrator.email)
        await driver.pause(1000)
        await HomeScreen.password.setValue(login.Administrator.password)
        await driver.pause(1000)
        await HomeScreen.signin.click()
        await HomeScreen.success_alert.waitForDisplayed({ timeout: 20000 })
        await driver.pause(5000)
    }
});
Then(/^I Click on Create New Event$/, async () => {
    await driver.pause(20000)

    try{
        await CreateEventScreen.cookie_btn.waitForDisplayed({timeout:10000})
        await CreateEventScreen.cookie_btn.click()
    }catch(e){

    }
    await CreateEventScreen.dropdown.waitForDisplayed({timeout:10000})
    await CreateEventScreen.dropdown.click()
    await CreateEventScreen.createeventbtn.waitForDisplayed({timeout:10000})
    await CreateEventScreen.createeventbtn.click()
});
Then(/^I Should see Create Event Form$/, async () => {
    await driver.pause(2000)
    await CreateEventScreen.eventpage.waitForDisplayed({timeout:10000})
});
Then(/^I Started Filling Basic Info Form$/, async () => {
    await driver.pause(2000)
    await CreateEventScreen.eventpage.waitForDisplayed({timeout:10000})
    await CreateEventScreen.event_category.click()
    const category = await CreateEventScreen.category.replace('replacehere',EventDetails.EventCategory)
    await $(category).waitForDisplayed({timeout:10000})
    await $(category).click()
    await CreateEventScreen.event_type.waitForDisplayed({timeout:10000})
    await CreateEventScreen.event_type.click()
    const type = await CreateEventScreen.type.replace('replacehere',EventDetails.EventType)
    await $(type).waitForDisplayed({timeout:10000})
    await $(type).click()
    await CreateEventScreen.hosted_by.waitForDisplayed({timeout:10000})
    await CreateEventScreen.hosted_by.setValue(EventDetails.HostedBy)
    await CreateEventScreen.title.waitForDisplayed({timeout:10000})
    await CreateEventScreen.title.setValue(EventDetails.EventTitle)
    await CreateEventScreen.savebtn.waitForDisplayed({timeout:10000})
    await CreateEventScreen.savebtn.click()
});
Then(/^I Started Filling Details Form/, async () => {
    await driver.pause(2000)
    await CreateEventScreen.brandimage.waitForDisplayed({ timeout: 10000 })
    await CreateEventScreen.brandimage.click()
    await CreateEventScreen.brandlogo.waitForDisplayed({ timeout: 10000 })
    await CreateEventScreen.brandlogo.click()
    await driver.pause(2000)
    await CreateEventScreen.savebtn.waitForDisplayed({timeout:10000})
    await CreateEventScreen.savebtn.click()
});
Then(/^I Started Filling Add Media Form/, async () => {
    await driver.pause(2000)
    await CreateEventScreen.link.waitForDisplayed({ timeout: 10000 })
    await CreateEventScreen.link.setValue(EventDetails.EventVideoLink)
    await driver.pause(2000)
    await CreateEventScreen.savebtn.waitForDisplayed({timeout:10000})
    await CreateEventScreen.savebtn.click()
});
Then(/^I Started Filling Add Co-Hosts Form/, async () => {
    await driver.pause(2000)
    await CreateEventScreen.host_name.waitForDisplayed({ timeout: 10000 })
    await CreateEventScreen.host_name.setValue(EventDetails.EventCoHosts.FullName)
    await driver.pause(2000)
    await CreateEventScreen.host_email.waitForDisplayed({ timeout: 10000 })
    await CreateEventScreen.host_email.setValue(EventDetails.EventCoHosts.EmailId)
    await driver.pause(2000)
    await CreateEventScreen.savebtn.waitForDisplayed({timeout:10000})
    await CreateEventScreen.savebtn.click()
});
Then(/^I Preview Event/, async () => {
    await driver.pause(2000)

    await Gestures.swipeUp()
    await driver.pause(2000)
    await Gestures.swipeUp()
    await driver.pause(2000)
    await Gestures.swipeUp()
    await driver.pause(2000)
    await Gestures.swipeUp()
    await driver.pause(2000)
    await Gestures.swipeUp()
    await driver.pause(2000)
    await Gestures.swipeUp()
    await driver.pause(2000)
    await Gestures.swipeUp()
    await driver.pause(2000)
    await Gestures.swipeUp()
    await driver.pause(2000)
    await Gestures.swipeUp()
    await driver.pause(2000)
    await Gestures.swipeUp()
    await driver.pause(2000)
    await Gestures.swipeUp()
    await CreateEventScreen.savebtn.waitForDisplayed({timeout:10000})
    await CreateEventScreen.savebtn.click()
    await CreateEventScreen.confirm_btn.waitForDisplayed({timeout:10000})
    await CreateEventScreen.confirm_btn.click()
});
Then(/^I Should See Congratulations Page$/, async () => {
    await driver.pause(2000)
    await CreateEventScreen.submit_btn.waitForDisplayed({ timeout: 10000 })
    await CreateEventScreen.submit_btn.click()
});
Then(/^I Should Redirect To Event List Page And See Created Event$/, async () => {
    await driver.pause(5000)
});