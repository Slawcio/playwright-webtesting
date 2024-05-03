@all @t3 @adding-to-cart
Feature: Main Page -> Listing Page -> Product Page

  Scenario: Adding searched product to cart
    Given I am on main page
    When I click "accept cookie"
    And I type "elektryczny" into "search input"
    And I click "search button"
    Then I see "search keyword label" contains "elektryczny"
    And I dont see "skeletons" elements

    #adding to cart first product from list
    When I click "product box"
    And I click "add to cart button"
    And I click "insurance popup"
    Then I see "added to cart info"

    #checking cart
    When I click "cart icon"
    Then I see "product summarize"
    Then I see "product box"