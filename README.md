# east8date
> Get east +8 timezone date object.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/east8date
```

## usage
```js
import sdf from '@jswork/simple-date-format';
import es8 from '@jswork/east8date';

const res = sdf('datetime', es8());
console.log(res);

// 2024-02-24 10:06:51
```

## types
```ts
/// <reference types="@jswork/east8date/global.d.ts" />
```

## license
Code released under [the MIT license](https://github.com/afeiship/east8date/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/east8date
[version-url]: https://npmjs.org/package/@jswork/east8date

[license-image]: https://img.shields.io/npm/l/@jswork/east8date
[license-url]: https://github.com/afeiship/east8date/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/east8date
[size-url]: https://github.com/afeiship/east8date/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/east8date
[download-url]: https://www.npmjs.com/package/@jswork/east8date
