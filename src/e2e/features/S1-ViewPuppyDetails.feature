@puppy @s1
Feature: Puppy List -> Puppy Details: View Hanna details

  Scenario: View details for the puppy Hanna
    Given I am on puppy list page
    When I click "view details button for the puppy called Hanna"
    Then I see "puppy details content"
    When I click "return to list button"
    Then I see "puppy list page"
