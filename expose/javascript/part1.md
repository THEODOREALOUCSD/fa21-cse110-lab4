**PART 1**
1. Line 9 will print: values added: 20
2. Line 13 will print: final result: 20
3. Line 9 will print: values added: 20
4. Line 13 will now have an error because result is now a let variable meaning result is no longer accessible at line 13 since it is outside the if block.
5. Line 9 has an error since result is now a const meaning it's value cannot be changed from its initial value of 0
6. Line 13 will also have an error since this line is outside the if statement.
**PART 2**
1. Line 12 will log to console the number 3 since that was the value of i that stopped the for loop and since i is a var, this value saved outside the for loop.
2. Line 13 will log to console 150 since that was the last calculated discounted price.
3. Line 13 will still log to console 150 since it's techinically the rounded discounted price.
4. This will return the array of [50, 100, 150] since the discounted price is 50% and the final price will not affect the value since they are all even values.
5. This will return an error since i is a let variable and line 12 is outside its block scope.
6. This will return an error since discountedPrice is a let variable and line 12 is outside its block scope.
7. Line 14 returns 150 since this line is within the same block scope as finalPrice.
8. This function should still return [50, 100, 150] since all let variables are used correctly in their respective scopes.
9. This will return an error since i is a let variable and line 12 is outside its block scope.
10. Line 12 will return 3.
11. This should still return [50, 100, 150] since discountedPrice is a const variable that is declared every iteration of the for loop. This means there should be no problems in calculating discountedPrice.
