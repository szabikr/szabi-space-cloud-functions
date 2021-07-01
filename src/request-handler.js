function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri === '') {
    request.uri += '/index.html';
    return request;
  }

  if (uri === '/') {
    request.uri += 'index.html';
    return request;
  }

  // dealing with the trailing slash
  if (uri.endsWith('/')) {
    uri = uri.substring(0, uri.length - 1);
    request.uri = uri;
  }

  if (!uri.endsWith('.html')) {
    request.uri += '.html';
    return request;
  }

  return request;
}

exports.handler = handler;
