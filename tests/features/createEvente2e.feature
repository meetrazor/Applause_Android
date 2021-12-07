Feature: Createing Event 
  Scenario: Create e2e Event On Applause
    Given I open app
    When I Click on Sign in With Zoom 
    Then I Should verify Sign In  
    When I Click on Create New Event
    Then I Should see Create Event Form
    Then I Started Filling Basic Info Form
    Then I Started Filling Details Form
    Then I Started Filling Add Media Form
    Then I Started Filling Add Co-Hosts Form
    Then I Preview Event
    Then I Should See Congratulations Page
    Then I Should Redirect To Event List Page And See Created Event