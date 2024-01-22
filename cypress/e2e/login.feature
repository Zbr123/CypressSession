Feature: Login

  Scenario Outline: Forgot Password with Invalid Address
    Given I am on the forgot password page of herokoapp
    And I type "<email>" in the email field  
    And I click on Submit button
  
Examples:
      | email                 |
      | zubair@co-ventech.com |

  Scenario Outline: Forgot password with invalid email address
    Given I am on the forgot password page of herokoapp
    And I type "<username>" in the email field  
    And I click on Submit button
  
Examples:
      | email   |
      | zubair@ |

  Scenario Outline: Login with correct username and password
    Given I am on the login page of herokoapp
    And I type "<username>" in the username field  
    And I type "<password>" in the password field
    And I click on Login button
    Then I should see success message
  
Examples:
      | username | password             |
      | tomsmith | SuperSecretPassword! | 