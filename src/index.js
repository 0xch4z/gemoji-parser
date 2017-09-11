import emojis from '../emojis.json'

const emojiExp = /^:[a-z0-9-_+]+:/gi

const parseEmojis = (...args) => {
	let s = typeof args[0] === 'string' ? args[0] :
		args.reduce((a,b) => a + b).join('')
  const matches = s.match(/:[a-z0-9-_+]+:/gi)
	if (!matches) return s
	for (const match of matches) {
		const emoji = emojis[match] || '\b'
		s = s.replace(match, emoji)
	}
	return s
}

module.exports = parseEmojis
