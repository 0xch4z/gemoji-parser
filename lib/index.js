'use strict';

var _emojis = require('../emojis.json');

var _emojis2 = _interopRequireDefault(_emojis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emojiExp = /^:[a-z0-9-_+]+:/gi;

var parseEmojis = function parseEmojis() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var s = typeof args[0] === 'string' ? args[0] : args.reduce(function (a, b) {
		return a + b;
	}).join('');
	var matches = s.match(/:[a-z0-9-_+]+:/gi);
	if (!matches) return s;
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = matches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var match = _step.value;

			var emoji = _emojis2.default[match] || '\b';
			s = s.replace(match, emoji);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return s;
};

module.exports = parseEmojis;