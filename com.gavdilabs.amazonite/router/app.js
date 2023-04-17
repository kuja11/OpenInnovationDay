/**
 * =================== BTP Dashboard - Approuter ======================
 *
 * --------------------------------------------------------------------
 * DEFAULT ENDPOINTS:
 * '/user-api/currentUser' -> Shows the user information on the current active user
 * '/user-api/attributes' -> Shows the user authentication attributes (SAML) provided by IDP
 *
 * CUSTOM ENDPOINTS:
 * '/jwtdecode' -> Decodes the current user JWT token and retrieves the SAML associated. Used for Trust verification.
 * '/apps' -> Retrieves the local config files for app tiles and sends it to requester.
 */

// Initialize core service app
const express = require('express');
const app = express();

// Load json parser and request reader functionality
const request = require('request');
const bodyparser = require('body-parser');
const morgan = require('morgan');

// Load in core approuter functionality + security
const approuter = require('@sap/approuter');
const exampleCustomHandler = require('./lib/customHandlerExample');

// Instantiate approuter instance
const router = new approuter();

// Initialize service app dependencies
router.use(bodyparser.urlencoded({extended: true}));
router.use(bodyparser.json());
router.use(express.static(`${__dirname}/`));

// Custom middleware for logging all received requests
router.beforeRequestHandler.use(morgan('combined'));

// Setup custom request handlers
// TODO: Custom handlers

// App Tiles - List available apps from endpoint
router.beforeRequestHandler.use("/custom", exampleCustomHandler);

// Start approuter and initialize start endpoint
router.start();
router.get('/', function(req, res) {
	res.sendFile('start/index.html');
	console.log("[server] index served");
});

