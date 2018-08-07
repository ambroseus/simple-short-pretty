/* jshint esversion: 6 */

const TYPEOF_BOOLEAN  = 'boolean';
const TYPEOF_NUMBER   = 'number';
const TYPEOF_OBJECT   = 'object';
const TYPEOF_STRING   = 'string';
const TYPEOF_FUNCTION = 'function';

module.exports.BLANK_ARRAY = '[]';
module.exports.BLANK_JSON = '{}';
module.exports.BLANK_STRING  = '';

module.exports.SEPERATOR_FOR_COLLECTION = ',';
module.exports.SEPERATOR_FOR_NAME = '-';
module.exports.SEPERATOR_FOR_PATH = '/';
module.exports.SEPERATOR_FOR_STRINGS = ' ';
module.exports.UNCONVERTED_OBJECT = '[object Object]';

module.exports.cat = (...strings) => {
	let result;
	if (exports.isNil(strings) || (strings.length < 1)) {
		return result;
	}
	result = exports.BLANK_STRING;
	for (let i=0; i<strings.length; i++) {
		let str = strings[i];
		if (exports.toString(str, exports.BLANK_STRING)) {
			result += exports.SEPERATOR_FOR_STRINGS + str;
		}
	}
	if (exports.isString(result)) {
		result = result.trim();
	}
	return result;
}

// Note that the first arg is usually the path to nodejs, and the second
// arg is the location of the script you're executing.  this strips those
// off and returns only the command line arguments.
module.exports.getCommandLineArguments = () => {
	return process.argv.slice(2);
}

module.exports.isArray = (obj) => {
	if (exports.isNil(obj)) {
		return false;
	}
	return Array.isArray(obj);
}

module.exports.isNotArray = (obj) => {
	return exports.isArray(obj) ? false: true;
}

module.exports.isBlankString = (str) => {
	if (exports.isNil(str)) {
		return true;
	}
	str = exports.trimString(str);
	if (exports.isEmptyString(str)) {
		return true;
	}
	if ((/^[\s\b\f\n\r\t\v]*$/).test(str)) {
		return true;
	}
	return false;
}

module.exports.isNotBlankString = (str) => {
	return exports.isBlankString(str) ? false: true;
}

module.exports.isBoolean = (obj) => {
	if (exports.isNil(obj)) {
		return false;
	}
	if (typeof obj === TYPEOF_BOOLEAN) {
		return true;
	}
	return false;
}

module.exports.isNotBoolean= (obj) => {
	return exports.isBoolean(obj) ? false: true;
}

module.exports.isDefined = (obj) => {
	if (undefined === obj) {
		return false;
	}
	return true;
}

module.exports.isNotDefined = (obj) => {
	return exports.isDefined(obj) ? false : true;
}

module.exports.isEmptyString = (str) => {
	if (exports.isNil(str)) {
		return true;
	}
	str = exports.toString(str, exports.BLANK_STRING);
	if (str.length < 1) {
		return true;
	}
	return false;
}

module.exports.isNotEmptyString = (obj) => {
	return exports.isEmptyString(obj) ? false: true;
}

module.exports.isFunction = (obj) => {
	if (exports.isNil(obj)) {
		return false;
	}
	if (typeof obj === TYPEOF_FUNCTION) {
		return true;
	}
	return false;
}

module.exports.isNotFunction = (obj) => {
	return exports.isFunction(obj) ? false: true;
}

module.exports.isNil = (obj) => {
	if (undefined === obj) {
		return true;
	} else if (null === obj) {
		return true;
	}
	return false;
}

module.exports.isNotNil = (obj) => {
	return exports.isNil(obj) ? false: true;
}

module.exports.isNumber = (obj) => {
	if (exports.isNil(obj)) {
		return false;
	}
	if (typeof obj === TYPEOF_NUMBER) {
		if(Number.isNaN(obj)) {
			return false;
		}
		return true;
	}
	return false;
}

module.exports.isNotNumber= (obj) => {
	return exports.isNumber(obj) ? false: true;
}

module.exports.isObject = (obj) => {
	if (exports.isNil(obj)) {
		return false;
	}
	if (typeof obj === TYPEOF_OBJECT) {
		return true;
	}
	return false;
}

module.exports.isNotObject = (obj) => {
	return exports.isObject(obj) ? false: true;
}

module.exports.isString = (obj) => {
	if (exports.isNil(obj)) {
		return false;
	}
	if (typeof obj === TYPEOF_STRING) {
		return true;
	}
	return false;
}

module.exports.isNotString= (obj) => {
	return exports.isString(obj) ? false: true;
}

module.exports.Number2String = (num) => {
	if (exports.isNotNumber(num)) {
		throw new Error('Input must be a nubmer?');
	}
	return '' + num;
}

module.exports.toNumber = (str) => {
	if (exports.isNumber(str)) {
		return str;
	}
	let err = 'The input must be a number or a string value that converts to a number!';
	if (exports.isNotString(str)) {
		throw new Error('Input is not string. Value: ' + JSON.stringify(str) + ' ' + err.stack);
	}
	let result = parseFloat(str);
	if (exports.isNotNumber(result)) {
		throw new Error('Input is not a number. Value: ' + JSON.stringify(str) + ' ' + err.stack);
	}
	return result;
}

module.exports.toString = (obj, aDefault) => {
	if (exports.isNil(obj)) {
		return aDefault;
	}
	if (exports.isString(obj)) {
		return obj;
	}
	if (exports.isNumber(obj)) {
		try {
			return exports.Number2String(obj);
		} catch (e) {
			// Do nothing keep on trying
		}
	}
	if (exports.isBoolean(obj)) {
		return obj.toString(obj);
	}

	if(typeof obj.stringify === TYPEOF_FUNCTION) {
		try {
			let tmp = obj.stringify();
			if(exports.UNCONVERTED_OBJECT !== tmp) {
				return tmp;
			}
		} catch (e) {
			// Do nothing.
		}
	}

	if(typeof obj.toString === TYPEOF_FUNCTION) {
		try {
			let tmp = obj.toString();
			if(UNCONVERTED_OBJECT !== tmp) {
				return tmp;
			}
		} catch (e) {
			// Do nothing.
		}
	}

	// This may blow up but let it bubble up.
	let result = JSON.stringify(obj);
	if (exports.isNotNil(result)) {
		return result;
	}

	// Not even sure it's possible to get here?
	return aDefault;
}

module.exports.trimString = (str) => {
	str = exports.toString(str, exports.BLANK_STRING);
	str = str.replace(/^[\s\b\f\n\r\t\v]*/g, exports.BLANK_STRING);
	str = str.replace(/[\s\b\f\n\r\t\v]*$/g, exports.BLANK_STRING);
	return str;
}
