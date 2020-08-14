const memoryCache = require('memory-cache');
const { CACHE_KEY } = require('../config');

module.exports = function (request, response, next) {
  return (request, response, next) => {
    const key = CACHE_KEY + request.originUrl || request.url;
    const cachedBody = memoryCache.get(cachedBody);

    if (cachedBody) {
      return response.send(JSON.parse(cachedBody));
    }
    response.sendResponse = response.send;
    response.send = (body) => {
      memoryCache.put(key, body, duration * 1000);
      response.sendResponse(body);
    };
    next();
  };
};
