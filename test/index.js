/* jshint esversion: 6 */

const assert = require('assert');
const BaseUtil = require('../index.js');
const spaceItems = " \b\f\n\r\t\v";

let tmp1;
let tmp2;
let testObj = JSON.parse(BaseUtil.BLANK_JSON);

// Testing cat
tmp1 = 'one';
tmp2 = 'two'
assert.equal(BaseUtil.cat(), undefined, 'undefined string returns undefined');
assert.equal(BaseUtil.cat(BaseUtil.BLANK_STRING), BaseUtil.BLANK_STRING, 'empty string empty string');
assert.equal(BaseUtil.cat(tmp1), tmp1, 'Normal string returns normal string');
assert.equal(BaseUtil.cat(tmp1, tmp2), tmp1 + BaseUtil.SEPERATOR_FOR_STRINGS + tmp2, 'Spaces and tab before and after stirng are removed');
console.log('cat testing done');

assert.equal(BaseUtil.isArray(), false, 'Undefined is not an array');
assert.equal(BaseUtil.isArray(null), false, 'Null is not an array');
assert.equal(BaseUtil.isArray(123), false, 'Number is not an array');
assert.equal(BaseUtil.isArray('test'), false, 'String is not an array');
assert.equal(BaseUtil.isArray({'a':'b'}), false, 'Object is not an array');
assert.equal(BaseUtil.isArray([]), true, 'Epty array is an array');
assert.equal(BaseUtil.isArray([ 1, 2, 3 ]), true, 'Array is an array');
assert.equal(BaseUtil.isArray(true), false, 'Array is not an array');
assert.equal(BaseUtil.isArray(false), false, 'Array is not an array');
console.log('isArray testing done');

assert.equal(BaseUtil.isNotArray(), true, 'Undefined is not an array');
assert.equal(BaseUtil.isNotArray(null), true, 'Null is not an array');
assert.equal(BaseUtil.isNotArray(123), true, 'Number is not an array');
assert.equal(BaseUtil.isNotArray('test'), true, 'String is not an array');
assert.equal(BaseUtil.isNotArray({'a':'b'}), true, 'Object is not an array');
assert.equal(BaseUtil.isNotArray([]), false, 'Empty array is an array');
assert.equal(BaseUtil.isNotArray([ 1, 2, 3 ]), false, 'Array is an array');
assert.equal(BaseUtil.isNotArray(false), true, 'Array is not an array');
assert.equal(BaseUtil.isNotArray(true), true, 'Array is not an array');
console.log('isNotArray testing done');

assert.equal(BaseUtil.isBlankString(), true, 'An undefined string is blank!');
assert.equal(BaseUtil.isBlankString(null), true, 'A null string is blank!');
assert.equal(BaseUtil.isBlankString(BaseUtil.BLANK_STRING), true, 'A string with no elements is blank!');
assert.equal(BaseUtil.isBlankString(spaceItems), true, 'A string with just space elements is blank');
assert.equal(BaseUtil.isBlankString('noemtpy'), false, 'This is an non blank string?');
assert.equal(BaseUtil.isBlankString(testObj), false, 'An object is not a false string');
console.log('isBlankString testing done');

assert.equal(BaseUtil.isNotBlankString(), false, 'An undefined string is blank!');
assert.equal(BaseUtil.isNotBlankString(null), false, 'A null string is blank!');
assert.equal(BaseUtil.isNotBlankString(BaseUtil.BLANK_STRING), false, 'A string with no elements is blank!');
assert.equal(BaseUtil.isNotBlankString(spaceItems), false, 'A string with just space elements is blank');
assert.equal(BaseUtil.isNotBlankString('noemtpy'), true, 'This is an non blank string?');
assert.equal(BaseUtil.isNotBlankString(testObj), true, 'An object is not a false string');
console.log('isNotBlankString testing done');

assert.equal(BaseUtil.isBoolean(), false, 'Undefined is not a boolean');
assert.equal(BaseUtil.isBoolean(null), false, 'Null is not a boolean');
assert.equal(BaseUtil.isBoolean(123), false, 'Number is not a boolean');
assert.equal(BaseUtil.isBoolean('test'), false, 'String is not a boolean');
assert.equal(BaseUtil.isBoolean({'a':'b'}), false, 'Object is not a boolean');
assert.equal(BaseUtil.isBoolean([ 1, 2, 3 ]), false, 'Array is not a boolean');
assert.equal(BaseUtil.isBoolean(true), true, 'Boolean is a boolean');
assert.equal(BaseUtil.isBoolean(false), true, 'Boolean is a boolean');
console.log('isBoolean testing done');

assert.equal(BaseUtil.isNotBoolean(), true, 'Undefined is not a boolean');
assert.equal(BaseUtil.isNotBoolean(null), true, 'Null is not a boolean');
assert.equal(BaseUtil.isNotBoolean(123), true, 'Number is not a boolean');
assert.equal(BaseUtil.isNotBoolean('test'), true, 'String is not a boolean');
assert.equal(BaseUtil.isNotBoolean({'a':'b'}), true, 'Object is not a boolean');
assert.equal(BaseUtil.isNotBoolean([ 1, 2, 3 ]), true, 'Array is not a boolean');
assert.equal(BaseUtil.isNotBoolean(false), false, 'Boolean is a boolean');
assert.equal(BaseUtil.isNotBoolean(true), false, 'Boolean is a boolean');
console.log('isNotBoolean testing done');

tmp1 = undefined;
assert.equal(BaseUtil.isDefined(tmp1), false, 'False for undefined object!');
tmp1 = null;
assert.equal(BaseUtil.isDefined(tmp1), true, 'True for null object!');
tmp1 = 'avalue';
assert.equal(BaseUtil.isDefined(tmp1), true, 'True for defined object!');
console.log('isDefined testing done');

tmp1 = undefined;
assert.equal(BaseUtil.isNotDefined(tmp1), true, 'True for undefined object!');
tmp1 = null;
assert.equal(BaseUtil.isNotDefined(tmp1), false, 'False for null object!');
tmp1 = 'avalue';
assert.equal(BaseUtil.isNotDefined(tmp1), false, 'False for defined object!');
console.log('isNotDefined testing done');

assert.equal(BaseUtil.isEmptyString(), true, 'Undefined string is empty!');
assert.equal(BaseUtil.isEmptyString(null), true, 'A null string is empty!');
assert.equal(BaseUtil.isEmptyString(BaseUtil.BLANK), true, 'A string with no elements is empty!');
assert.equal(BaseUtil.isEmptyString(" \t\n"), false, 'A string with just space elements is not emtpy');
assert.equal(BaseUtil.isEmptyString('noemtpy'), false, 'This is an non empty string?');
assert.equal(BaseUtil.isEmptyString(testObj), false, 'An object is not a false string');
console.log('isEmptyString testing done');

assert.equal(BaseUtil.isNotEmptyString(), false, 'Undefined string is empty!');
assert.equal(BaseUtil.isNotEmptyString(null), false, 'A null string is empty!');
assert.equal(BaseUtil.isNotEmptyString(BaseUtil.BLANK), false, 'A string with no elements is empty!');
assert.equal(BaseUtil.isNotEmptyString(" \t\n"), true, 'A string with just space elements is not emtpy');
assert.equal(BaseUtil.isNotEmptyString('noemtpy'), true, 'This is an non empty string?');
assert.equal(BaseUtil.isNotEmptyString(testObj), true, 'An object is not a false string');
console.log('isNotEmptyString testing done');

assert.equal(BaseUtil.isFunction(), false, 'Undefined string is not a function!');
assert.equal(BaseUtil.isFunction(null), false, 'A null string is not a function!');
assert.equal(BaseUtil.isFunction('noemtpy'), false, 'A string is not a function!');
assert.equal(BaseUtil.isFunction(testObj), false, 'An object is not a false string');
assert.equal(BaseUtil.isFunction(()=>{}), true, 'A function is a function');
console.log('isFunction testing done');

assert.equal(BaseUtil.isNotFunction(), true, 'Undefined is not a function!');
assert.equal(BaseUtil.isNotFunction(null), true, 'Null is not a function!');
assert.equal(BaseUtil.isNotFunction('noemtpy'), true, 'A string is not a function!');
assert.equal(BaseUtil.isNotFunction(testObj), true, 'An object is not a fuction!');
//assert.equal(BaseUtil.isNotFunction(()=>{}), false, 'A function is a function');
console.log('isNotFunction testing done');

assert.equal(BaseUtil.isNumber(), false, 'Undefined is not a number');
assert.equal(BaseUtil.isNumber(null), false, 'Null is not a number');
assert.equal(BaseUtil.isNumber(123), true, 'Number is a number');
assert.equal(BaseUtil.isNumber(parseInt('invalid')), false, 'NaN is not a number');
assert.equal(BaseUtil.isNumber('test'), false, 'String is not a number');
assert.equal(BaseUtil.isNumber({'a':'b'}), false, 'Object is not a number');
assert.equal(BaseUtil.isNumber([1, 2, 3]), false, 'Array is not a number');
assert.equal(BaseUtil.isNumber(true), false, 'Boolean is not a number');
assert.equal(BaseUtil.isNumber(false), false, 'Boolean is not a number');
console.log('isNumber testing done');

assert.equal(BaseUtil.isNotNumber(), true, 'Undefined is not a number');
assert.equal(BaseUtil.isNotNumber(null), true, 'Null is not a number');
assert.equal(BaseUtil.isNotNumber(123), false, 'Number is a number');
assert.equal(BaseUtil.isNotNumber(parseInt('invalid')), true, 'NaN is not a number');
assert.equal(BaseUtil.isNotNumber('test'), true, 'String is not a number');
assert.equal(BaseUtil.isNotNumber({'a':'b'}), true, 'Object is not a number');
assert.equal(BaseUtil.isNotNumber([1, 2, 3]), true, 'Array is not a number');
assert.equal(BaseUtil.isNotNumber(false), true, 'Boolean is not a number');
assert.equal(BaseUtil.isNotNumber(true), true, 'Boolean is not a number');
console.log('isNotNumber testing done');

tmp1 = undefined;
assert.equal(BaseUtil.isNil(tmp1), true, 'True for undefined object!');
tmp1 = null;
assert.equal(BaseUtil.isNil(tmp1), true, 'True for null object!');
tmp1 = 'avalue';
assert.equal(BaseUtil.isNil(tmp1), false, 'False for defined object!');
console.log('isNil testing done');

tmp1 = undefined;
assert.equal(BaseUtil.isNotNil(tmp1), false, 'False for undefined object!');
tmp1 = null;
assert.equal(BaseUtil.isNotNil(tmp1), false, 'False for null object!');
tmp1 = 'avalue';
assert.equal(BaseUtil.isNotNil(tmp1), true, 'True for defined object!');
console.log('isNotNil testing done');

assert.equal(BaseUtil.isObject(), false, 'Undefined is not an object');
assert.equal(BaseUtil.isObject(null), false, 'Null is not an object');
assert.equal(BaseUtil.isObject(123), false, 'Number is not an object');
assert.equal(BaseUtil.isObject('test'), false, 'String is not an object');
assert.equal(BaseUtil.isObject({'a':'b'}), true, 'Object is an object');
assert.equal(BaseUtil.isObject([1, 2, 3]), true, 'Array is an object');
assert.equal(BaseUtil.isObject(true), false, 'Boolean is not an object');
assert.equal(BaseUtil.isObject(false), false, 'Boolean is not an object');
console.log('isObject testing done');

assert.equal(BaseUtil.isNotObject(), true, 'Undefined is not an object');
assert.equal(BaseUtil.isNotObject(null), true, 'Null is not an object');
assert.equal(BaseUtil.isNotObject(123), true, 'Number is not an object');
assert.equal(BaseUtil.isNotObject('test'), true, 'String is not an object');
assert.equal(BaseUtil.isNotObject({'a':'b'}), false, 'Object is an object');
assert.equal(BaseUtil.isNotObject([ 1, 2, 3 ]), false, 'Array is an object');
assert.equal(BaseUtil.isNotObject(false), true, 'Boolean is not an object');
assert.equal(BaseUtil.isNotObject(true), true, 'Boolean is not an object');
console.log('isNotObject testing done');

assert.equal(BaseUtil.isString(), false, 'Undefined is not a string');
assert.equal(BaseUtil.isString(null), false, 'Null is not a string');
assert.equal(BaseUtil.isString(123), false, 'String is a string');
assert.equal(BaseUtil.isString('test'), true, 'String is a string');
assert.equal(BaseUtil.isString({'a':'b'}), false, 'String is a string');
assert.equal(BaseUtil.isString([1, 2, 3]), false, 'Array is a string');
assert.equal(BaseUtil.isString(true), false, 'Boolean is not a string');
assert.equal(BaseUtil.isString(false), false, 'Boolean is not a string');
console.log('isString testing done');

assert.equal(BaseUtil.isNotString(), true, 'Undefined is not a string');
assert.equal(BaseUtil.isNotString(null), true, 'Null is not a string');
assert.equal(BaseUtil.isNotString(123), true, 'String is a string');
assert.equal(BaseUtil.isNotString('test'), false, 'String is not a string');
assert.equal(BaseUtil.isNotString({'a':'b'}), true, 'String is a string');
assert.equal(BaseUtil.isNotString([ 1, 2, 3 ]), true, 'Array is a string');
assert.equal(BaseUtil.isNotString(false), true, 'Boolean is not a string');
assert.equal(BaseUtil.isNotString(true), true, 'Boolean is not a string');
console.log('isNotString testing done');

assert.throws( function() { BaseUtil.Number2String(); }, Error, 'Expected an exception!');
assert.throws( function() { BaseUtil.Number2String(null); }, Error, 'Expected an exception!');
assert.throws( function() { BaseUtil.Number2String('invalid'); }, Error, 'Expected an exception!');
assert.throws( function() { BaseUtil.Number2String('123'); }, Error, 'Expected an exception!');
assert.equal(BaseUtil.Number2String(123), '123', 'A number should just return a string!');
console.log('Number2String testing done');

assert.throws( function() { BaseUtil.toNumber(); }, Error, 'Expected an exception!');
assert.throws( function() { BaseUtil.toNumber(null); }, Error, 'Expected an exception!');
assert.throws( function() { BaseUtil.toNumber('invalid'); }, Error, 'Expected an exception!');
assert.equal(BaseUtil.toNumber(123), 123, 'A number should just return a number!');
assert.equal(BaseUtil.toNumber('234'), 234, 'A string number should just return a number!');
assert.equal(BaseUtil.toNumber('-1.5'), -1.5, 'A string number should just return a number!');
console.log('toNumber testing done');

tmp1 = 'somestring';
assert.equal(BaseUtil.trimString(tmp1), tmp1, 'Normal string returns normal string');
assert.equal(BaseUtil.trimString(undefined), BaseUtil.BLANK_STRING, 'undefined string returns empty string');
assert.equal(BaseUtil.trimString(null), BaseUtil.BLANK_STRING, 'null string returns empty string');
assert.equal(BaseUtil.trimString(BaseUtil.BLANK_STRING), BaseUtil.BLANK_STRING, 'empty string returns emptystring');
assert.equal(BaseUtil.trimString(spaceItems + tmp1 + spaceItems, tmp1), tmp1, 'Spaces and tab before and after stirng are removed');
assert.equal(BaseUtil.trimString(spaceItems), BaseUtil.BLANK_STRING, 'Space and tabs only string returns empty');
assert.equal(BaseUtil.trimString(testObj), BaseUtil.BLANK_JSON, 'An object is convert ot string and trimStringed ');
console.log('trimString testing done');
