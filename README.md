Router
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Express](http://expressjs.com/guide/using-middleware.html) router which provides a status endpoint.


## Installation

``` bash
$ npm install express-router-status
```


## Usage

``` javascript
var router = require( 'express-router-status' );
```

#### router

A mountable [Express](http://expressjs.com/guide/routing.html) route handler.

``` javascript
var express = require( 'express' );

// Create a new application:
var app = express();

// Mount the route handler on the application:
app.use( '/health', router );
```

---
## Routes

<a name="status-get"></a>
#### GET /status

URI endpoint for getting a server application\'s status.


##### Response: 200 (text/plain)

The response body will be

```
OK
```


##### Examples

From the command-line,

``` bash
$ curl 'http://127.0.0.1:<port>/status'
```

From another [Node](https://nodejs.org/) application,

``` javascript
var request = require( 'request' );

request({
	'uri': 'http://127.0.0.1:<port>/status',
	'method': 'GET'
}, onResponse );

function onResponse( error, response, body ) {
	if ( error ) {
		console.error( error );
		return;
	}
	console.log( body );
}
```

A successful request will receive the following response body:

```
OK
```


---
## Examples

``` javascript
var request = require( 'request' ),
	express = require( 'express' ),
	router = require( 'express-router-status' );


// APP //

var app = express();

// Mount the router on the application:
app.use( '/health', router );

// Create an HTTP server:
app.listen( 7331, onListen );

function onListen() {
	console.log( 'Server is listening for requests on port: 7331.' );
	run();
}


// RUN //

var count = 0;

function run() {
	if ( ++count > 10 ) {
		process.exit( 0 );
	}
	setTimeout( ping, 1000 );
}

function ping() {
	request({
		'method': 'GET',
		'uri': 'http://127.0.0.1:7331/health/status'
	}, onResponse );
}

function onResponse( error, response, body ) {
	if ( error ) {
		throw error;
	}
	console.log( 'Status: %s.', response.statusCode );
	console.log( 'Body: %s.', body );
	run();
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```

---
## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/express-router-status.svg
[npm-url]: https://npmjs.org/package/express-router-status

[travis-image]: http://img.shields.io/travis/kgryte/express-router-status/master.svg
[travis-url]: https://travis-ci.org/kgryte/express-router-status

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/express-router-status/master.svg
[codecov-url]: https://codecov.io/github/kgryte/express-router-status?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/express-router-status.svg
[dependencies-url]: https://david-dm.org/kgryte/express-router-status

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/express-router-status.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/express-router-status

[github-issues-image]: http://img.shields.io/github/issues/kgryte/express-router-status.svg
[github-issues-url]: https://github.com/kgryte/express-router-status/issues
