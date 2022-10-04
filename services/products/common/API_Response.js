const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Origin': '*',
};

const responses = {
  ok(data = {}) {
    return {
      headers,
      statusCode: 200,
      body: JSON.stringify(data),
    };
  },

  badRequest(data = {}) {
    return {
      headers,
      statusCode: 400,
      body: JSON.stringify(data),
    };
  },
};

module.exports = responses;
