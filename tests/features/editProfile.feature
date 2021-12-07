Feature: Edit Profile 
  Scenario: Verify edit user profile
    Given I open app
    When I Click on Sign in With Zoom 
    Then I Should verify Sign In  
    When the user clicks on user icon 
    Then edit profile,payouts and sign out options should be visible
    When the user clicks on edit profile
    Then edit profile page should open
    Then user Should Be Able to Change First Name
    Then user Should Be Able to Change Last Name
    Then user Should Be Able to Update Bio
    Then user Should Be Able to Add Places
    Then user Should Be Able to Save Profile