<h2 align="center">Gemoji Parser 🚀</h1>
<p align="center">An NodeJS Github emoji parser with syntactic sugar.</p>
<p align="center">
  <img src="https://travis-ci.org/Charliekenney23/gemoji-parser.svg" alt="Travis status" href="https://travis-ci.org/Charliekenney23/gemoji-parser">
  <img src="https://img.shields.io/npm/v/gemoji-parser.svg" alt="NPM version" href="https://npmjs.org/gemoji-parser">
  <img src="https://img.shields.io/npm/dt/gemoji-parser.svg" alt="NPM version" href="https://npmjs.org/gemoji-parser">
</p>

### Including gemoji

To get started with `gemoji-parser`, install it via npm.

```bash
  $ npm install gemoji-parser
```
 
### Usage

You can use `gemoji-parser` on [es6 template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) or standard strings as parameters.

```js
  import gemoji from 'gemoji-parser'

  const myGemojiLiteral = gemoji`
    foo :floppy_disk: bar :heart: bazz :+1:
  `
  // => `foo 💾 bar ❤️ bazz 👍🏽`

  const myGemojiString = 'I :heart: gemojis!'
  gemoji(myGemojiString)
  // => `I ❤️ gemojis!`
```

### License

MIT © [Charles Kenney](https://github.com/charliekenney23)
