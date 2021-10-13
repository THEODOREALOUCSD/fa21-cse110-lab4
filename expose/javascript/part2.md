**PART 2**
Variables
<br/>
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

<br/>
Data Types
<br/>
12. A. student.name <br/> B. student['Grad Year'] <br/> C. student.greeting() <br/> D. student['Favorite Teacher'].name <br/> E. student.courseload[0]

<br/>
Basic Operators and Type Conversion
<br/>
*Answer given by output, explanation* <br/>
13. A. 32, concats the literal string 3 with 2 since '+' means concat in this case <br/>
 B. 1, '-' is recognized as a mathematical operator so converts 3 into number <br/>
 C. 3, null is numerically converted to 0 <br/>
 D. 3null, since 3 is a string, '+' is recognized as concat and interprets null to be a string <br/>
 E. 4, true is numerically converted to 1 <br/>
 F. 0, both null and false are numerically converted to 0 <br/>
 G. 3undefined, since 3 is a string,  '+' is recognized as concat and interprets undefined a string <br/>
 H.NaN, undefined is numerically NaN so subtracting a string by NaN returns NaN <br/>
14. A. true, 2 is converted to a number <br/> 
B. true, compares strings by first character and '2' > '1' <br/>
C. true, '2' is converted to a number <br/>
D. false, 2 is not strictly equal to '2' <br/>
E. false, true is numerically equal to 1 <br/>
F. true, any x that is not undefined or null, Boolean(x) = true <br/>
15. == is regular equality and will automatically convert objects (i.e. strings to numbers) to do a possible comparision while === checks if two objects are strictly equal so the type similarities are considered <br/>
