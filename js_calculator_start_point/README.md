# JavaScript Calculator Testing

As a user I want to be able to perform simple arithmetic functions in a web browser.

The code provided has a calculator object with functions to add, subtract, divide, and multiple given numbers to a previous total (public/js/calculator.js). This allows the user to chain multiple operations one after the other, and then ask for the total.

This is integrated into an HTML page that gives a 'calculator layout' of buttons which operate the functionality of the JavaScript (public/app.js and index.html).

The calculator object has properties to keep track of calculations as it performs them.


##SETUP:
Run `npm install` to install all dependencies.

You can run the code from the terminal with `npm start`, you can then view the calculator at http://localhost:3000.

You can run the unit tests from the terminal with `npm test`.

To run the integration / browser tests:

Run `npm run webdriver-update` to update the webdriver server that the integration tests run on.

With your localhost:3000 server still running, open a new tab in Terminal and run `npm run webdriver`

Leave that server running as well. Then run `npm run protractor` to run the integration tests.

##Tasks

###Unit Tests

You need to write unit tests to ensure that the majority of functions in the calculator operate correctly. The test framework to be used is Mocha. The file to write in is in `/tests/unit/calculator_spec.js`.

All of these functions should be tested thoroughly:

  - calculator.add()
  - calculator.subtract()
  - calculator.multiply()
  - calculator.divide()
  - calculator.numberClick()
  - calculator.operatorClick()
  - calculator.clearClick()

### Integration/Acceptance Tests

You need to write integration/acceptance tests to ensure all of the units of code work together in the browser to perform as the user would wish. The framework provided to do this is Protractor JS using Chai for assertions, and there is one sample test written in `/tests/integration/tests.js`.

You should write tests to ensure:

  - Do the number buttons work to update the display of the running total?
  - Do each of the arithmetical operations work to update the display with the result of the operation?
  - Can we chain multiple operations together?
  - Does it work as expected for a range of numbers? (positive, negative, decimals, very large numbers)

What does the code do in exceptional circumstances?

  - If you divide by zero, what is the effect?
  - Can you write a test to describe what you'd prefer to happen, and then correct the code to make that test pass.



  ## Section B: JavaScript Calculator Testing


  |This activity relates to the following Outcome and Knowledge/Skills:
  |-----------------------------------------------------------------
  |Outcome 4: Test programs using a range of approaches
  |Carry out unit testing
  |Carry out integration testing
  |Check the software meets specified requirements and carry out User Acceptance Testing.


  The program is a Javascript calculator to be able to perform simple arithmetic functions in a web browser

  The code provided has a calculator object with functions to add, subtract, divide, and multiple given numbers to a previous total. This allows the user to chain multiple operations one after the other, and then ask for the total.

  This is integrated into an HTML page that gives a 'calculator layout' of buttons which operate the functionality of the JavaScript.

  The calculator object has properties to keep track of calculations as it performs them.

  ## SETUP:
  Run `npm install` to install all dependencies.

  You can run the code from the terminal with `npm start`, you can then view the calculator at http://localhost:3000.

  You can run the unit tests from the terminal with `npm test`.

  To run the integration / browser tests:

  Run `npm run webdriver-update` to update the webdriver server that the integration tests run on.

  With your localhost:3000 server still running, open a new tab in Terminal and run `npm run webdriver`

  Leave that server running as well. Then run `npm run protractor` to run the integration tests.


  #### Task 3: Unit Testing

  You need to write unit tests to ensure that the majority of functions in the calculator operate correctly:

  	calculator.add()
  	calculator.subtract()
  	calculator.multiply()
  	calculator.divide()
  	calculator.numberClick()
  	calculator.operatorClick()
  	calculator.clearClick()


  #### The program should correctly perform the following tasks:

  	multiply 3x5 and get 15
  	divide 21/7 and get 3
  	add 1+4 and get 5
  	subtract 7-4 and get 3
  	concatenate multiple number button clicks
  	chain multiple operations together
  	clear the running total without affecting the calculation

  #### What does the code do in exceptional circumstances?

  If you divide by zero, what is the effect?
  Can you write a test to describe what you'd prefer to happen under this circumstance, and then correct to code to make that test pass.

  Upload the completed code to your PDA GitHub Repo.
