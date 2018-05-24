// importing express module
let express = require("express")
let router = require('./express-routes')

// getting an object of the express server
let app = express();

// setting context path and routes to app. contextPath = "/express-node-example";
app.use("/express-node-example/api", router);

// listening to express server at port <port_number>
app.listen(5001, function() {
    console.log('Express node server is running at port # 5001');
});