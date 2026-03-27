///METHOD: PUT
///URL: https://api.trello.com/1/cards/{id}/checkItem/{idCheckItem}?key=APIKey&token=APIToken'

/// POST-REQUEST SCRIPT 
const body = pm.response.json();

///STATUS SHOULD BE 200 OK
pm.test("Status should be 200 OK", function(){
    pm.response.to.have.status(200);
    });

///RESPONSE SHOULD DISPLAY CORRECT CHECK ITEM ID
pm.test("Response should return correct check item ID", function(){
    pm.expect(body.id).to.equal("69c5d80b23a460ed07c23b06");
    });

///RESPONSE SHOULD DISPLAY CORRECT CHECK LIST ID
pm.test("Response should return correct check list ID", function(){
    pm.expect(body.idChecklist).to.equal("69c4a8e9f6e0ff1aad11b39c");
    });
///RESPONSE SHOULD DISPLAY CORRECT CHECK ITEM ID
pm.test("Response should return another name", function(){
    pm.expect(body.name).to.not.equal("item 4");
    });
