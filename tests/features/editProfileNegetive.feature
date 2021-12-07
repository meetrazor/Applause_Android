Feature: Edit Profile 
  Scenario: Verify edit user profile Negetive
    Given I open app
    When I Click on Sign in With Zoom 
    Then I Should verify Sign In  
    When the user clicks on user icon
    Then edit profile,payouts and sign out options should be visible
    When the user clicks on edit profile
    Then edit profile page should open
    When user Leave First Name as Empty It Shows Error "First Name is required!" 
    When user Leave Last Name as Empty It Shows Error "Last Name is required!" 
    Then user Should Be Able to Change Bio
    Then Save Button Should Be Disabled