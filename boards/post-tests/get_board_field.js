/// POST-REQUEST SCRIPT 
const body = pm.response.json();

///STATUS SHOULD BE 200 OK
pm.test("Status should be 200 OK", function(){
    pm.response.to.have.status(200);
    });

//RESPONSE SHOULD RETURN BOARD NAME
pm.test("Board name should return 'API testing Postman'",function(){
    pm.expect(body._value).to.equal("API testing Postman")
});
