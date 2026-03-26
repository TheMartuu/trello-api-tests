//METHOD: GET  
//URL: 'https://api.trello.com/1/cards/{id}?key=APIKey&token=APIToken'

/// POST-REQUEST SCRIPT 
const body = pm.response.json();

///STATUS SHOULD BE 200 OK
pm.test("Status should be 200 OK", function(){
    pm.response.to.have.status(200);
    });

///RESPONSE SHOULD RETURN CHECKIST ID 
pm.test("Response should return checklist id",function(){
    pm.expect(body[0].id).to.equal("69c4a5d2e5011b5d683eb8a0");
});

///RESPONSE SHOULD RETURN CORRECT CHECKLIST NAME
pm.test("Response should return correct checklist name",function(){
    pm.expect(body[0].name).to.equal("Checklist test");
});

///RESPONSE SHOULD RETURN CARD ID
pm.test("Response should return correct card ID",function(){
    pm.expect(body[0].idCard).to.equal("69c49d78a7d59d36686d69ff");
});

///RESPONSE SHOULD RETURN CHECKLIST ITEM
pm.test("Response should return checklist item",function(){
    pm.expect(body[0].checkItems[0].name).to.equal("item 1");
});