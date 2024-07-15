(function() {
  var oldBaseUrl = 'https://sigmaflare.github.io';
  var newBaseUrl = 'https://sigmaflare.us.to';

  var path = window.location.pathname + window.location.search + window.location.hash;

  var newUrl = newBaseUrl + path;

  window.location.replace(newUrl);
})();
