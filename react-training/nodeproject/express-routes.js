let express = require("express")
let router = express.Router()
let bodyParser = require("body-parser")
let employeeData = require("./employee-data")

router.use(bodyParser.json());

router.route('/test').get((request, response) => {
    console.log(request.url);
    response.end('hello');
});

router.route('/getEmpData').get((request, response) => {
    response.writeHead(200, {'Context-Type':'application/json'});
    response.write(JSON.stringify(employeeData));
    response.end();
});

// Getting id as url param
router.route('/getEmpDetailsById/:id').get((request, response) => {
    const requestedEmpId = request.params.id;
    // console.log(requestedEmpId);
    let empDetail = employeeData.filter((emp) => emp.id == requestedEmpId);
    if(empDetail.length > 0) {
        response.json(empDetail)
    }
    else {
        response.write("No employee record found for id : " + requestedEmpId);
    }
    response.end();
});

router.route('/addNewEmployeeDetails').post((request, response) => {
    let newEmployeeDetail = {
        "id" : employeeData.length + 1,
        "name" : request.body.name,
        "dept" : request.body.dept
    }

    // Insert new employee record in the array
    employeeData.push(newEmployeeDetail);
    response.json(employeeData);
});

router.route('/removeEmpDetail/:id').delete((request, response) => {
    let empId = request.params.id;
    let empIndex = employeeData.findIndex((emp) => emp.id == empId);
    employeeData.splice(empIndex, 1);
    response.json(employeeData);
});

module.exports = router;