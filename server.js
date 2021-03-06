var express = require('express');

var app = express();

app.use(express.static(__dirname));
app.set('port',( process.env.PORT || 8848));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
