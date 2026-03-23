//METHOD: POST 
//URL: 'https://api.trello.com/1/cards/{id}?key=APIKey&token=APIToken'

//PRE REQUEST SCRIPT
pm.collectionVariables.set("title","Card creation test")

/// POST-REQUEST SCRIPT 
const body = pm.response.json();

///STATUS SHOULD BE 200 OK
pm.test("Status should be 200 OK", function(){
    pm.response.to.have.status(200);
    });

//CARD SHOULD BE ADDED TO THE SELECTED LIST
pm.test("Card should be added to the 'PENDING' list",function(){
    pm.expect(body.idList).to.equal("69afa0f9884c68a1810bbc9e");
});

//TITLE SHOULD MATCH VARIABLE 
pm.test("Title should be 'Card creation test'",function(){
    pm.expect(body.name).to.equal("Card creation test");
});
