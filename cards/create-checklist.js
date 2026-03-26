//METHOD: POST
///'https://api.trello.com/1/cards/{id}/checklists?key=APIKey&token=APIToken'

/// POST-REQUEST SCRIPT 
const body = pm.response.json();

///STATUS SHOULD BE 200 OK
pm.test("Status should be 200 OK", function(){
    pm.response.to.have.status(200);
    });

///RESPONSE SHOULD RETURN CARD ID
pm.test("Response should return correct card ID",function(){
    pm.expect(body.idCard).to.equal("69c49d78a7d59d36686d69ff");
});

///RESPONSE SHOULD RETURN CHECKLIST TITLE 
pm.test("Response should return correct title",function(){
    pm.expect(body.name).to.equal("Checklist creation");
});

///CHECKLIST SHOULD BE CREATED WITH THE ITEMS FROM ORIGINAL LIST
pm.test("Checklist should be created with items",function(){ 
    test_items = [body.checkItems[0].name,body.checkItems[1].name,body.checkItems[2].name]
    pm.expect(test_items).to.deep.equal(['item 1','item 2','item 3']);
});