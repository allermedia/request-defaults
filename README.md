request-defaults
===============

__[request](https://github.com/request/request) wrapper which provides global defaults__

`request` provides `.defaults()` method for setting default options, which returns new instance of `request` with said defaults
in place. However, as these settings are not global, on every file where request is used, call to `defaults()` with same options
is required. `request-defaults` introduces `globalDefaults()` method, which enables you to have these defaults set globally.


## Install

```sh
$ npm install request-defaults
```


## Usage

Instead of `request`, use `request-defaults` directly, which just provides instance of `request` with said defaults in place.

```js
var request = require('request-defaults');
```


### request.globalDefaults()

Creates new instance of `request` with given global defaults, which are used for every subsequent `request-defaults` instance.

```js
var request = require('request-defaults');
request.globalDefaults({
  timeout: 10*1000
});
```

You can see the list of available defaults from [request documentation](https://github.com/request/request#requestoptions-callback).



### Custom sets

You can also create custom sets as separate properties.

__Note: Since `globalDefaults()` creates new instance of `request` so calling it will also clear any previously set custom properties.__

```js
var request = require('request-defaults');
request.api = request.defaults({
  timeout: 20*1000
});

request.api.get('localhost/api/stuff', function(err, response, body) {
  console.log('body');
});
```
