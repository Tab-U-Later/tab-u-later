var request = require('request');
var cheerio = require('cheerio');

export function fetchTitle(url, onComplete) {
  url = 'https://cors-anywhere.herokuapp.com/' + url;
  request(url, function (error, response, body) {
    let output = {};

    if (error) {
      output = 404;
    }

    else if (!error && response.statusCode === 200) {
      var $ = cheerio.load(body);
      var title = $("head > title").text().trim();
      output = { title: title, url: url };
    } else {
      console.log(`Error = ${error}, code = ${response.statusCode}`);
      output = 404;
    }
    onComplete(output);
  });
}
