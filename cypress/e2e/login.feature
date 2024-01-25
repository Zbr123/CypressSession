Feature: Login

    Scenario : Forgot Password with Invalid Address
    Given I am on the forgot password page of herokoapp
    And I type "zubair@co-ventech.com" in the email field
    And I click on Submit button


    Scenario : Forgot password with invalid email address
    Given I am on the forgot password page of herokoapp
    And I type "zubair@" in the email field
    And I click on Submit button


  Scenario: Login with correct username and password
    Given I am on the login page of herokoapp
    And I type "tomsmith" in the username field
    And I type "SuperSecretPassword!" in the password field
    And I wait for 3 seconds
    And I click on Login button
    Then I should see success message

  Scenario: Login with correct credentials using XPath
    Given I am on the login page of herokoapp
    And I type "tomsmith" in the username field
    And I type "SuperSecretPassword!" in the password field
    And I wait for 5 seconds
    And I click on login button using XPath
    Then I should see success message


  Scenario: Clearing the password field
    Given I am on the login page of herokoapp
    And I type "SuperSecretPassword!" in the password field
    And I wait for 5 seconds
    And I clear the password field
    And I wait for 3 seconds


  Scenario: Selecting options from the dropdown
    Given I am on the dropdown page
    And I wait for 3 seconds
    When I select an option by value "1"
    And I wait for 3 seconds
    Then the selected option should have value "1"
    When I select an option by text "Option 2"
    And I wait for 3 seconds
    Then the selected option should have value "2"


  Scenario: Checking and unchecking checkboxes
    Given I am on the checkboxes page
    And I wait for 3 seconds
    When I check the first checkbox
    And I wait for 3 seconds
    Then the first checkbox should be checked
    When I uncheck the first checkbox
    And I wait for 3 seconds
    Then the first checkbox should not be checked
    When I check the second checkbox
    And I wait for 3 seconds
    Then the second checkbox should be checked
    When I uncheck the second checkbox
    And I wait for 3 seconds
    Then the second checkbox should not be checked
    And I wait for 3 seconds

  Scenario: Validating error messages with invalid credentials
    Given I am on the login page
    When I fill in invalid credentials
    And I submit the login form
    Then I should see a validation message

    Scenario: Successful login with debugging points
    Given I am on the login page
    When I enter valid credentials
    Then I should be logged in successfully