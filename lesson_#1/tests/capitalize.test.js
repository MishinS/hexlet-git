import { capitalize } from '../src/capitalize.js';

if (capitalize('hello') != 'Hello') {
	throw new Error('Function do not work');
}

if (capitalize('') != '') {
        throw new Error('Function do not work');
}

console.log('All tests done');
