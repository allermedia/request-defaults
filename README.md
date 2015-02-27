request-defaults
===============

__[request](https://github.com/request/request) wrapper which provides global defaults__



## Install

```sh
$ npm install request-defaults
```


## Usage

Instead of `request`, use `request-defaults`, which just provides `request` with said defaults in place.

```js
var request = require('request-defaults');
```


### globalDefaults()

Creates new instance of `request` with global defaults, which are used for every `request-defaults` instance.

```js
var request = require('request-defaults');
request.globalDefaults({
  timeout: 10*1000
});
```


### Custom sets

You can also create custom sets as separate properties.

__Note: Since `globalDefaults()` creates new instance of `request`, calling it will also clear any previously set custom properties.__

```js
var request = require('request-defaults');
request.api = request.defaults({
  timeout: 20*1000
});

request.api.get('localhost/api/stuff', function(err, response, body) {
  console.log('body');
});
```
