'use strict';

var util = require('./lib/utils');

// Build message combo create mesage and add data
function buildMessage(code, data) {
  return util.appendData(util.createMessage(code), data);
}

// Append the message and status code to a response

function buildResponse(res, msg) {
  util.appendCode(res, msg.status.code);
  return util.appendStatus(res, msg);
}

module.exports = {
  message: buildMessage,
  build: buildResponse
}

