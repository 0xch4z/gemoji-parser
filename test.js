import test from 'ava';
import gemoji from './lib';

test('Parses emojis', t => {
  const i = gemoji`:pencil2:`
  const o = '✏️'
  t.is(i, o)
})

test('Stacks emojis', t => {
  const i = gemoji`:mailbox::mailbox_closed:`
  const o = '📫📪'
  t.is(i, o)
})

test('Preserves whitespace', t => {
  const i = gemoji`
    I :heart: reading :book:s
    and :walking: my :dog:!
  `
  const o = `
    I ❤️ reading 📖s
    and 🚶 my 🐶!
  `
  t.is(i, o)
})

