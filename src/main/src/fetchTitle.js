var request = require('request');
var cheerio = require('cheerio');

export function fetchTitle(url, onComplete) {
    request(url, function (error, response, body) {
        let output = {};

        if (!error && response.statusCode === 200) {
            var $ = cheerio.load(body);
            var title = $("head > title").text().trim();
            output = {title: title, url: url};
        } else {
            console.log(`Error = ${error}, code = ${response.statusCode}`);
            output = error
        }
        onComplete(output);
    });
}
