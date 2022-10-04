'use strict';
const Responses = require('../common/API_Response');
const Dynamo = require('../common/Dynamo');
const tableName = process.env.tableName;

module.exports.handler = async (event) => {
  let ID = event.pathParameters.ID;

  const basket = await Dynamo.get(ID, tableName).catch((e) => {
    console.log('err ');
    return null;
  });

  if (!basket) return Responses._400({ message: 'failed to get basket' });

  return Responses._200(basket);
};
