# MongoDB $inc Operator Type Error

This repository demonstrates a common error when using the `$inc` operator in MongoDB update queries.  The `$inc` operator is used to increment a numeric field by a specified value.  However, if a string is provided as the increment value, a type error occurs.

## Bug
The `bug.js` file contains an example of incorrect usage.  The `$inc` operator is used with a string value, causing the update operation to fail.

## Solution
The `bugSolution.js` file provides a corrected version. The string value for the increment is replaced with a number, fixing the type error and successfully updating the document.