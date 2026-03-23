// Generated from: testing/features/first.feature
import { test } from "playwright-bdd";

test.describe('Linus PCT-Store site', () => {

  test('Check get started link', async ({ Given, When, Then, page }) => { 
    await Given('I am on home page', null, { page }); 
    await When('I click on the card "Alakazam"', null, { page }); 
    await Then('I see the description "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000."', null, { page }); 
  });

  test('Navigate from Alakazam to Blastoise', async ({ Given, When, Then, page }) => { 
    await Given('I am on the page for "Alakazam"', null, { page }); 
    await When('I click on the menu link "Blastoise"', null, { page }); 
    await Then('I see the description "A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles."', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('testing/features/first.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I click on the card \"Alakazam\"","stepMatchArguments":[{"group":{"start":20,"value":"\"Alakazam\"","children":[{"start":21,"value":"Alakazam","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I see the description \"Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000.\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000.\"","children":[{"start":23,"value":"Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":12,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am on the page for \"Alakazam\"","stepMatchArguments":[{"group":{"start":21,"value":"\"Alakazam\"","children":[{"start":22,"value":"Alakazam","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I click on the menu link \"Blastoise\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Blastoise\"","children":[{"start":26,"value":"Blastoise","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then I see the description \"A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles.\"","stepMatchArguments":[{"group":{"start":22,"value":"\"A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles.\"","children":[{"start":23,"value":"A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end