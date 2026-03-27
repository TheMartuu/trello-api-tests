///METHOD: GET
///URL: https://api.trello.com/1/cards/{id}/list?key=APIKey&token=APIToken'

/// POST-REQUEST SCRIPT 
const body = pm.response.json();

///STATUS SHOULD BE 200 OK
pm.test("Status should be 200 OK", function(){
    pm.response.to.have.status(200);
    });

//CARD SHOULD BE UNDER 'IN PROGRESS' list 
pm.test("Card should be under In Progress list",function(){
    pm.expect(body.name).to.equal("IN PROGRESS")
});

//CARD SHOULD BE IN BOARD  
pm.test("Card should be under Board",function(){
    pm.expect(body.idBoard).to.equal("69afa0e90da938f3cde16035")
});

//CARD SHOULD NOT BE CLOSED 
pm.test("Card should not be Closed",function(){
    pm.expect(body.closed).to.equal(false)
});
