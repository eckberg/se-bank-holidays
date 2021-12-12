# Swedish Bank Holidays

![npm](https://img.shields.io/npm/v/se-bank-holidays)
![NPM](https://img.shields.io/npm/l/se-bank-holidays)

Typescript library for looking up Swedish Bank Holidays (bankhelgdagar). Zero dependencies. Providing an easy to use API to check whether a specific date is a bank holiday (or bank day) in Sweden, and also offers basic date subtraction / addition support.

## Getting started

### Node

Install using [npm](https://www.npmjs.com/):
```bash
npm install se-bank-holidays
```

Then require it to any module:

```typescript
const holidays = require('se-bank-holidays');

const test = holidays.isHoliday(new Date('2021-12-24')); // => true
```

### Browser
To use the library in browser, use generally available CDN solutions, or download and use distribution files directly in your code (`dist/index.js`, `dist/index.min.js` or `dist/index.mjs`).


## TODO
[ ] Improved documentation
[ ] Timezone support

## Credits
Creds to https://github.com/ryanseys/lune for inspiring on the lunar calculation utiility, use in this library.

## License
MIT
