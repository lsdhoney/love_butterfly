let express = require("express");
let app = express();

app.use('/', express.static('public'));






let port = process.env.PORT || 3000;
server.listen(port, ()=> {
console.log('listening at ', port);
});
