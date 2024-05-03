@all @t1 @registration-and-login
Feature: Main Page -> Login Page -> Account Page: Registration and Login

  #random data is generated in the scope of scenario
  Scenario: Successful Registration -> Logout -> Login
    Given I am on main page
    When I click "accept cookie"
    And I click "my account box"
    Then I see "login page"

    When I click "registration button"
    Then I see "registration layer"
    When I type "random name" into "name input"
    And I type "random last name" into "last name input"
    And I type "random email" into "email input"
    And I type "random password" into "register password input"
    And I type "random password generated" into "register password confirmation input"
    And I click "regulation consent checkbox"
    And I click "confirm registration button"
    Then I see "account page"
    And I see element "my account label" displays text "Moje konto"

    When I click "account caret down"
    And I click "logout on caret link"
    Then I see "main page"

    #login based on registration
    When I click "my account box"
    And I type "random email generated" into "login input"
    And I type "random password generated" into "password input"
    And I click "login button"
    Then I see "account page"
    And I see element "my account label" displays text "Moje konto"