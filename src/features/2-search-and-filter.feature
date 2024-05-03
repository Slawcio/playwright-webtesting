@all @t2 @search-and-filter
Feature: Main Page -> Listing Page: Search and Filter

  Scenario: Search category and filter the results
    Given I am on main page
    When I click "accept cookie"
    And I type "elektryczny" into "search input"
    And I click "search button"
    Then I see "search keyword label" contains "elektryczny"
    And I dont see "skeletons" elements

    #filter test
    When I click "expand filter button" elements
    And I click "Raty do 30x0% filter checkbox"
    Then I see "active filter" contains "Raty do 30x0%"
