'use strict';

var status = [];

/*
 * Success Codes
 *
 */
status[200] = 'Status OK!';
status[201] = 'Resource Created';
status[202] = 'Request Accepted';
status[204] = 'No Content Available';

/*
 * Relocation Codes
 *
 */
status[301] = 'Moved Permanently';

/*
 * Error Codes
 *
 */
status[400] = 'Bad Request';
status[401] = 'Unauthorized Request';
status[402] = 'Payment Required';
status[403] = 'Forbidden';
status[404] = 'Request Not Found';
status[405] = 'Method Not Allowed';
status[408] = 'Request Timeout';
status[413] = 'Request Entity Too Large';
status[414] = 'Request URI Too Large';
status[415] = 'Unsuported Media Type';
status[420] = 'Too Many Requests'

/*
 * Server Error Codes
 *
 */
status[500] = 'Internal Server Error';

module.exports = {
  status: status
};
