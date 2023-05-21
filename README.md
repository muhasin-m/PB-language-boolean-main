# Programming Basics: Logical Operators

- work in `solution.js`

## 1. What type?

Check whether `3` is equal to `"3"` using loose comparison. Then, check whether they are equal while using strict comparison.

## 2. Questions

Print out the number of the correct answer in the terminal one by one

- Which of the following is the loose equality operator?

    1.  =
    2.  ==
    3.  ===
    4.  all of the above

- Which of the following is the strict equality operator?

    5.  =
    6.  ==
    7.  ===
    8.  none of the above

* Which of the following is used to ASSIGN a value to a variable?

    9.   =
    10.  ==
    11.  ===
    12.  const

## 3. Not

Complete the following code to print out 'good evening' using 'myVar':

```javascript
const myVar = true

console.log(.............. ? 'good morning' : 'good evening')
```

## 4. Short Circuit

Complete the following code by filling the spaces with '&&' or '||' to get the value that fits the variable's name.

*Hint: these values will always return false: `false` , `0`, `''`*

```javascript
const firstName = '' .... 'John' .... 0
const emptyStr  = '' .... false .... 'Hello World'
const zero  = '' .... false .... 0
const seven = 75 .... 'nine' .... 7

console.log(firstName, emptyStr, zero, seven)
```