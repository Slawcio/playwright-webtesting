@all @1 @login
Feature: Main Page -> Login Page -> Account Page: Registration and Login

  @registration
  Scenario: Successful Registration
    Given I am on main page
    When I click "my account button"
    Then I see "login page"

    When I click "registration button"
    Then I see "registration layer"
    When I type "random username" into "login input"
    And I type "random email" into "email input"
    And I type "random secure password" into "password input"
    And I type "the same password as above" into "password confirmation input"
    And I click "regulation consent checkbox"
    Then Pause 5000
#    And I click "confirm registration button"
#    Then I see "account page"
#    And I see element "my account label" displays text "Moje konto"

    When I click "account caret down"
    And I click "logout on caret link"
    Then I see "main page"
