/// POST-REQUEST SCRIPT 
const body = pm.response.json();


///STATUS SHOULD BE 200 OK
pm.test("Status should be 200 OK", function(){
    pm.response.to.have.status(200);
    });

///response body should contain object
pm.test("Response should return an object",function(){
    pm.expect(body).to.be.an('object');
    });

