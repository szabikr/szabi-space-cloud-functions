const test = require('ava');
const request = require('../request-handler');

function getEvent(uri) {
  return {
    request: {
      uri,
    },
  };
}

test('Request Handler: "" -> "/index.html"', t => {
  const result = request.handler(getEvent(''));
  t.is(result.uri, '/index.html');
});

test('Request Handler: "/" -> "/index.html"', t => {
  const result = request.handler(getEvent('/'));
  t.is(result.uri, '/index.html');
});

test('Request Handler: "/about" -> "/about.html"', t => {
  const result = request.handler(getEvent('/about'));
  t.is(result.uri, '/about.html');
});

test('Request Handler: "/about/" -> "/about.html"', t => {
  const result = request.handler(getEvent('/about/'));
  t.is(result.uri, '/about.html');
});

test('Request Handler: "/blog/post-1" -> "/blog/post-1.html"', t => {
  const result = request.handler(getEvent('/blog/post-1'));
  t.is(result.uri, '/blog/post-1.html');
});

test('Request Handler: "/blog/post-1/" -> "/blog/post-1.html"', t => {
  const result = request.handler(getEvent('/blog/post-1/'));
  t.is(result.uri, '/blog/post-1.html');
});

test('Request Handler: "/about.html/" -> "about.html"', t => {
  const result = request.handler(getEvent('/about.html/'));
  t.is(result.uri, '/about.html');
});
