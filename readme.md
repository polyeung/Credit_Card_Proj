Hudson River Trading wants to start issuing virtual credit cards to their employees. You are tasked with building the React component for employees to be able view and copy the card number, expiration date, and CVV. In the event that an employee's card is lost or stolen, users should be able to lock their card as well.

Requirements
Shared Requirements
Each character of the number fields should be masked with the • character by default (some exceptions noted below)
When mousing over the hidden fields, the full details should be visible.
Clicking on the number fields should copy the correct information (each section has their own requirements) to the clipboard (using the Clipboard API) and change the text in the corresponding number field to "Copied" for 1.5 seconds.
Card Number
Each character besides the last 4 digits should be masked
Digits should be visually separated by groups of 4 with a space in-between
Copy the full card number WITHOUT spaces (4024007107304395) to the clipboard.
Expiration Date
Each character besides a slash separating the month and year should be masked
The date should be represented as MM/YY with a preceding 0 for single digit months, e.g. 01/25
Copy the date in MM/YY format WITH the dividing slash (/) to the clipboard.
CVV
All characters should be masked.
Copy the numbers as is to the clipboard.
Lock Button
Clicking the Lock button should put the card in a "locked state", and should have the following properties:
The button text should read "Unlock"
All card details besides the HRT and Visa logo should not be visible
Both the HRT and Visa logos should have 50% opacity
DO NOT ALTER THE CARD_DETAILS VARIABLE, ANY classNames, style.css AND index.html
Note
The JavaScript clipboard API will not copy to your clipboard in the iframe viewer. In order to test if the copy functionality works, open the preview in its own page by clicking the  button in the upper right corner or write your own Puppeteer tests in in the user.test.js file.*

Demo
Here is a visual demonstration of the requirements:



[execution time limit] 60 seconds