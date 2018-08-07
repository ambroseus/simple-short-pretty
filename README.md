## Description

Simplier, shorter, prettier NodeJS code, that is the goal of this library. You can now write code like:
`if(isNumber(xxx))`
... or
`while(isNotNull(obj))`
...it's well simplier, shorter, prettier.

## Usage
cat(str1, str2 ... strN) joins the strings to one line with spaces btw. It will try and convert non string items to strings, this should work for primatives and non recursive objects.    
getCommandLineArguments() return an array of all the command line inputs.    
isArray(obj) false if undefined or null or not an array.    
isBlankString(str) Returns true if input string is: UNdefined, NULL or empty string '' or a string with only tabs and space characters.    
isBoolean(obj) false if undefined or null or not a boolean.    
isDefined(obj) True if defined, including if value is null.    
isEmptyString(str) Returns true if input string is: UNdefined or NULL or empty string ''.    
isFunction (obj) if the input is a function returns true, undefined/null returns false.    
isNotArray true if undefined or null or not an array.    
isNotBlankString(str) Returns true if input string is defined, no NULL and has 1 or more non tab/space characters.    
isNotBoolean(obj) true if undefined or null or not a boolean.    
isNotDefined(obj) True if undefined.    
isNotEmtpyString(str) Returns true if input string has 1 or more characters even if those characters are all spaces tabs etc.    
isNotFunction (obj) if the input is a function returns false, undefined/null returns true.    
isNotNull(obj) False if undefined or null.    
isNotNumber(obj) true if undefined or null or not a number.    
isNotObject true if undefined or null or not an object.    
isNotString true if undefined or null or not a string.    
isNull(obj) True if undefined or null.    
isNumber(obj) false if undefined or null or not a number.    
isObject(obj) false if undefined or null or not an object.    
isString false if undefined or null or not a string.    
Number2String(num) turn a known number into a string.    
toNumber(str) convert the string passed in to a number. If a number is passed in, it is returned as is. If the string can not be returned as a number an error is thrown..    
toString(obj, default) turn an object in to a string. If the input object is undefined, null or fails to convert then the default value is returned.    
trimString(str) If the input string is null, undefined returns empty string. string is clean of any space/return/control characters at the begining and/or end of the string.    

## Install
npm install simple-short-pretty

## Example
`const SSP = require(simple-short-pretty);`
`if(isFuntion(somepossiblefunctionhere))...`

## Test
npm test to run tests.
