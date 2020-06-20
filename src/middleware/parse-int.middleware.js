module.exports = function(request, response, next) { // request, response, next are passed by express
  const queryStrings = request.query;

  for (const key in queryStrings) {
    const length = queryStrings[key].length;
    const isValid = length > 20 ? false : !isNaN(parseInt(queryStrings[key]));

    if (isValid) {
      queryStrings[key] = parseInt(queryStrings[key]);
    }
  }

  request.query = queryStrings;
  next(); // next() grants access to the next middleware in express tail(queue)
};