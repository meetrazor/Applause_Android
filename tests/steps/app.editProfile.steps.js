import {Then, When, Given} from '@cucumber/cucumber';
import Gestures from '../helpers/Gestures'
import EditProfileScreen from '../screenobjects/edit.profile.screen'
import userinfo from '../data/editProfileNegetive.json'
import userinfoPositove from '../data/editProfilePositive.json'

When(/^the user clicks on user icon$/, async () => {
    await driver.pause(5000) 
    await EditProfileScreen.drop_down_btn.click()
});
Then(/^edit profile,payouts and sign out options should be visible$/, async () => {
    await driver.pause(2000)
    await EditProfileScreen.edit_profile.waitForDisplayed({ timeout: 20000 })
});
When(/^the user clicks on edit profile$/, async () => {
     await driver.pause(2000)
    await EditProfileScreen.edit_profile.click()
});
Then(/^edit profile page should open$/, async () => {
    await driver.pause(10000)
});
When(/^user Leave First Name as Empty It Shows Error "First Name is required!"$/, async () => {
    await driver.pause(2000)
    await EditProfileScreen.first_name.waitForDisplayed({ timeout: 20000 })
    await EditProfileScreen.first_name.setValue(userinfo.FirstName)
    await driver.pause(2000)
    await EditProfileScreen.first_name_alert.waitForDisplayed({ timeout: 20000 })
    if (EditProfileScreen.first_name_alert.value() !== 'First Name is required!') {
        throw new Error('Error Some Things Wrong')
    }
});
When(/^user Leave Last Name as Empty It Shows Error "Last Name is required!"$/, async () => {
    await driver.pause(2000)
    await EditProfileScreen.last_name.waitForDisplayed({ timeout: 20000 })
    await EditProfileScreen.last_name.setValue(userinfo.LastName)
    await driver.pause(2000)
    await EditProfileScreen.last_name_alert.waitForDisplayed({ timeout: 20000 })
    if (EditProfileScreen.last_name_alert.value() !== 'Last Name is required!') {
        throw new Error('Error Some Things Wrong')
    }
});
Then(/^user Should Be Able to Change Bio$/, async () => {
    await driver.pause(2000)
    await EditProfileScreen.bio.waitForDisplayed({ timeout: 20000 })
    await EditProfileScreen.bio.setValue(userinfo.Bio)
});
Then(/^Save Button Should Be Disabled$/, async () => {
    await driver.pause(2000)
    await EditProfileScreen.submit_btn.waitForDisplayed({ timeout: 20000 })
});
Then(/^user Should Be Able to Change First Name$/, async () => {
    await driver.pause(2000)
    await EditProfileScreen.first_name.waitForDisplayed({ timeout: 20000 })
    await EditProfileScreen.first_name.setValue(userinfoPositove.FirstName)
    await driver.pause(2000)
});
Then(/^user Should Be Able to Change Last Name$/, async () => {
    await driver.pause(2000)
    await EditProfileScreen.last_name.waitForDisplayed({ timeout: 20000 })
    await EditProfileScreen.last_name.setValue(userinfoPositove.LastName)
    await driver.pause(2000)
});
Then(/^user Should Be Able to Update Bio$/, async () => {
    await driver.pause(2000)
    await EditProfileScreen.bio.waitForDisplayed({ timeout: 20000 })
    await EditProfileScreen.bio.setValue(userinfoPositove.Bios)
    await driver.pause(2000)
});
Then(/^user Should Be Able to Add Places$/, async () => {
    await driver.pause(2000)
    await EditProfileScreen.add_places.waitForDisplayed({ timeout: 20000 })
    await EditProfileScreen.add_places.click()
    await driver.pause(2000)
    await EditProfileScreen.place_name.waitForDisplayed({ timeout: 20000 })
    await EditProfileScreen.place_name.setValue(userinfoPositove.Places.PlaceName)
    await driver.pause(2000)
    await EditProfileScreen.place_url.waitForDisplayed({ timeout: 20000 })
    await EditProfileScreen.place_url.setValue(userinfoPositove.Places.PlaceURL)
    await driver.pause(2000)
});
Then(/^user Should Be Able to Save Profile$/, async () => {
    await driver.pause(2000)
    await EditProfileScreen.submit_btn.waitForDisplayed({ timeout: 20000 })
    await EditProfileScreen.submit_btn.click()
    await driver.pause(2000)
});