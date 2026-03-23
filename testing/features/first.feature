Feature: Linus PCT-Store site

    Scenario: Check get started link
        Given I am on home page
        When I click on the card "Alakazam"
        Then I see the description "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000."

    Scenario: Navigate from Alakazam to Blastoise
        Given I am on the page for "Alakazam"
        When I click on the menu link "Blastoise"
        Then I see the description "A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles."