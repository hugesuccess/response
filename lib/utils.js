'use strict';

var status = require('./status').status;

function appendCode(res, code) {
  return res.status(code);
}

//Function to take a response and append a status message
//
function appendStatus(res, message) {
  return res.json(message);
}

// Take a response and append data
//
function appendData(message, data) {
  message.data = data;
  return message;
}

// Create Message
function createMessage(code) {
  return {status: {code: code, message: status[code]}};
}

module.exports = {
  appendCode: appendCode,
  appendStatus: appendStatus,
  appendData: appendData,
  createMessage: createMessage
};
