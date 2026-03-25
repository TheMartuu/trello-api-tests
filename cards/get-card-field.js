//METHOD: GET 
//URL: https://api.trello.com/1/cards/{id}/{field}?key=APIKey&token=APIToken


/// POST-REQUEST SCRIPT 
const body = pm.response.json();

///STATUS SHOULD BE 200 OK
pm.test("Status should be 200 OK", function(){
    pm.response.to.have.status(200);
    });

//RESPONSE SHOULD RETURN FIELD VALUE 
pm.test("Response should return title value",function(){
    pm.expect(body._value).to.equal("Create notes for the meeting");
});