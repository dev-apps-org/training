let express = require("express")
let router = require('./shopping-service-routes')

let app = express();
app.use("/shopping-service/api", router);

app.listen(5003, function() {
    console.log('Express node server is running at port # 5001');
});