'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*!
 * hemera
 * Copyright(c) 2016 Dustin Deus (deusdustin@gmail.com)
 * MIT Licensed
 */

// Errors messages
exports.default = {
  JSON_PARSE_ERROR: 'Invalid JSON payload',
  ACT_TIMEOUT_ERROR: 'Timeout',
  NO_TOPIC_TO_SUBSCRIBE: 'No topic to subscribe',
  NO_TOPIC_TO_REQUEST: 'No topic to request',
  PATTERN_ALREADY_IN_USE: 'Pattern is already in use',
  INVALID_ERROR_OBJECT: 'No native Error object passed',
  PATTERN_NOT_FOUND: 'No handler found for this pattern',
  IMPLEMENTATION_ERROR: 'Bad implementation',
  PAYLOAD_PARSING_ERROR: 'Invalid payload',
  ADD_MIDDLEWARE_ERROR: 'Middleware error',
  PLUGIN_ALREADY_REGISTERED: 'Plugin was already registered',
  TRANSPORT_CONNECTED: 'Connected!',
  PLUGIN_ADDED: 'PLUGIN - ADDED!',
  PAYLOAD_VALIDATION_ERROR: 'Invalid payload',
  ADD_ADDED: 'ADD - ADDED',
  BUSINESS_ERROR: 'Business error',
  FATAL_ERROR: 'Fatal error',
  EXTENSION_ERROR: 'Extension error',
  PUB_CALLBACK_REDUNDANT: 'Specify a callback as publisher is redundant',
  INVALID_EXTENSION_TYPE: 'Invalid extension type',
  PLUGIN_NAME_REQUIRED: 'Plugin name is required',
  PLUGIN_DEPENDENCY_MISSING: 'Plugin `%s` requires `%s` as dependency. Please install via `npm install --save %s`',
  PLUGIN_DEPENDENCY_NOT_FOUND: 'Plugin dependency not found'
};
//# sourceMappingURL=constants.js.map