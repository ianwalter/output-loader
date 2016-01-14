# output-loader
A Webpack loader that writes source to a file.

## Installation

Install via NPM:

```
npm install output-loader --save-dev
```

## Usage

Add output-loader as the last loader in the loader chain and specify a file
path as a query option. You can even specify multiple output-loaders throughout
the chain. Just [never break the chain](https://www.youtube.com/watch?v=PppUJ_JGq2U).

```js
'output?path=build/css/michael-stipes-stylesheet.css!postcss!sass'
```

&nbsp;

Created by [Ian Kennington Walter](http://iankwalter.com)
