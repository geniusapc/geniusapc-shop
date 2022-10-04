'use strict';
const Responses = require('../common/API_Response');
const Dynamo = require('../common/Dynamo');
const tableName = process.env.tableName;

module.exports.handler = async (event) => {
  return Responses._200( {
    message: 'Product service',
    input: null,
  },);
};
