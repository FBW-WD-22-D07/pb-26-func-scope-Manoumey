# Function Scope
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)



#### 1. Print Exponential Values
* In the file `index.js` write a function called `printExponentialValues` that accepts two numbers as parameters
* It should calulate a series of exponential numbers where the first argument is the base number for the calculation and the second argument designates how many numbers should be generated
* The function should print the resulting series of numbers to the terminal as a single string separated by space
* If one or both of the passed arguments are not a number, the message `"x or y is not a number"` should be printed to the terminal 
* For example if we have function(3, 5) The function should print `3 9 27 81 243` (Prints 5 exponential values of 3)
* function(2, 8) prints `2 4 8 16 32 64 128 256` (Prints 8 exponential values of 2)

#### 2. Fruits
* Create a function named `printFavoriteFruit`. Declare a variable called `fruit` outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: _x_". 

#### 3. Multiply a Number by Itself
* Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result` inside the function. 
* Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file.

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. Exponential Values

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | Function `printExponentialValues` exists |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | Function prints series of exponential numbers based on passed arguements |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | Function prints error message if one or both passed arguments are not a number |

### 2. Fruits closure

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | Variable `fruit` should exist |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | The function `printFavoriteFruit` should exist |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | The variable is reassigned and logged to the console |

### 3. Multiply a Number by Itself

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | The function `exponent` should exist |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | given 2 and 3 as arguments, logs [2, 4, 8] |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | given 3 and 4 as arguments, logs [3, 9, 27, 81] |
| ![Status](../../blob/badges/.github/badges/main/status9.svg) | given 4 and 5 as arguments, logs [4, 16, 64, 256, 1024] |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-function-scope)


[//]: # (autograding info end)