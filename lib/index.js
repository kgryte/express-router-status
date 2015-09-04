'use strict';

// MODULES //

var express = require( 'express' ),
	okay = require( './okay.js' );


// ROUTER //

var router = express.Router();
router.get( '/status', okay );


// EXPORTS //

module.exports = router;
