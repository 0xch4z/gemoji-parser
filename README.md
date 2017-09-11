<h1 align="center">Gemoji Parser 🚀</h1>
<p align="center">An NodeJS Github emoji parser with syntactic sugar.</p>

## Including gemoji

To get started with `gemoji-parser`, install it via npm.

```bash
  $ npm install gemoji-parser
```
 
## Usage

You can use `gemoji-parser` on [es6 template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) or standard strings as parameters.

```js
  import gemoji from 'gemoji-parser'

  gemoji`
    foo :floppy_disk: bar :heart: bazz :+1:
  `
  // => `foo 💾 bar ❤️ bazz 👍🏽`

  const myGemojiString = 'I :heart: gemojis!'
  gemoji(myGemojiString)
  // => `I ❤️ gemojis!`
```

## License

MIT © [Charles Kenney](https://github.com/charliekenney23)
