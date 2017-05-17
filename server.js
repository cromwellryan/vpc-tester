var express = require('express')
var app = express()
var os = require('os');

app.get('/', function (req, res) {
  res.send(`
  <html>
    <body>
      ${os.hostname()}sayswhat?
    </body>
  </html>
  `);
})

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
