/* global require, describe, it, beforeEach */
'use strict';

var mpath = './../lib/okay.js';


// MODULES //

var chai = require( 'chai' ),
	noop = require( '@kgryte/noop' ),
	okay = require( mpath );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'okay', function tests() {

	// SETUP //

	var request, response;

	request = {};
	response = {
		sendStatus: function( status ) {
			response._status = status;
			return this;
		}
	};

	beforeEach( function() {
		response._status = null;
		response.body = null;
	});

	// TESTS //

	it( 'should export a function', function test() {
		expect( okay ).to.be.a( 'function' );
	});

	it( 'should return a 200 status', function test() {
		okay( request, response, noop );
		assert.strictEqual( response._status, 200 );
	});

	it( 'should invoke a callback after sending the response', function test( done ) {
		okay( request, response, next );
		function next() {
			assert.ok( true );
			done();
		}
	});

});
