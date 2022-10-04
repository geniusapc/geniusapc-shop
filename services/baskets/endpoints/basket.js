'use strict';

module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Basket service',
        input: null,
      },
      null,
      2
    ),
  };
};
