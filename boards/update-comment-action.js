//--METHOD: PUT 
//'https://api.trello.com/1/actions/{id}/text?value={value}&key=APIKey&token=APIToken'

//PRE-REQUEST SCRIPT

//CREATE NEW VALUE FOR ACTION 
pm.environment.set("value","updated comment action")

//POST-RESPONSE SCRIPT
const body = pm.response.json();

///STATUS SHOULD BE 200 OK
pm.test("Status should be 200 OK", function(){
    pm.response.to.have.status(200);
    });

//RESPONSE SHOULD RETURN CORRECT ACTION id
pm.test("Should return correct action id",function(){
    pm.expect(body.id).to.equal("69b5793d5e4b68ae74cb4c0c")
});

//RESPONSE SHOULD RETURN NEW VALUE 
pm.test("Comment should be updated",function(){
    pm.expect(body.data.text).to.equal("updated comment action")
});